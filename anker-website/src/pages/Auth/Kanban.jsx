
import { useEffect, useState } from "react"
import { FaTrash, FaFire, FaPlus } from "react-icons/fa6"
import { getKanbanCards, updateKanbanCard, deleteKanbanCard, addKanbanCard } from "../../api/auth/kanbanCards"

const Kanban = () => (
  <div className="h-screen w-full text-neutral-50">
    <Board />
  </div>
)

const Board = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [draggingCardId, setDraggingCardId] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true)
        const fetchedCards = await getKanbanCards()
        setCards(fetchedCards)
      } catch (err) {
        console.error(err)
        setError("Failed to fetch cards")
      } finally {
        setLoading(false)
      }
    }
    fetchCards()
  }, [])

  const handleCardDragStart = (e, card) => {
    setDraggingCardId(card.id)
    e.dataTransfer.setData("cardId", card.id)
  }

  const handleCardDragEnd = () => setDraggingCardId(null)

  const handleColumnDrop = async (e, targetColumn, beforeId) => {
    e.preventDefault()
    const cardId = e.dataTransfer.getData("cardId")
    if (!cardId) return

    const originalCards = [...cards]

    let updatedCards = [...cards]
    let cardToMove = updatedCards.find((card) => card.id === cardId)
    if (!cardToMove) return

    updatedCards = updatedCards.filter((card) => card.id !== cardId)
    cardToMove = { ...cardToMove, column: targetColumn }

    const insertIndex = updatedCards.findIndex(card => card.id === beforeId)
    if (beforeId !== "-1" && insertIndex !== -1) {
      updatedCards.splice(insertIndex, 0, cardToMove)
    } else {
      updatedCards.push(cardToMove)
    }

    const cardsInTargetColumn = updatedCards
      .filter(card => card.column === targetColumn)
      .sort((a, b) => (a.order_in_column || 0) - (b.order_in_column || 0))

    cardsInTargetColumn.forEach((card, index) => {
      card.order_in_column = index * 10
    })

    setCards(updatedCards)

    try {
      await updateKanbanCard(cardId, {
        column: targetColumn,
        order_in_column: cardToMove.order_in_column
      })
    } catch (err) {
      console.error("Error updating card on backend...", err)
      setError("Failed to move card. Please refresh")
      setCards(originalCards)
    }
  }

  const handleBurnBarrelDrop = async (e) => {
    e.preventDefault()
    const cardId = e.dataTransfer.getData("cardId")
    if (!cardId) return

    const originalCards = [...cards]
    setCards(prev => prev.filter(card => card.id !== cardId))

    try {
      await deleteKanbanCard(cardId)
    } catch (err) {
      console.error("Failed to delete card", err)
      setError("Failed to delete card. Please refresh")
      setCards(originalCards)
    }
  }

  if (loading) return <div className="flex h-screen items-center justify-center text-neutral-50">Loading Kanban board...</div>
  if (error) return <div className="flex h-screen items-center justify-center text-red-500">{error}</div>

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column title="Backlog" column="backlog" cards={cards} setCards={setCards} headingColor="text-neutral-500" handleCardDragStart={handleCardDragStart} handleCardDragEnd={handleCardDragEnd} handleColumnDrop={handleColumnDrop} draggingCardId={draggingCardId} />
      <Column title="TODO" column="todo" cards={cards} setCards={setCards} headingColor="text-purple-200" handleCardDragStart={handleCardDragStart} handleCardDragEnd={handleCardDragEnd} handleColumnDrop={handleColumnDrop} draggingCardId={draggingCardId} />
      <Column title="In Progress" column="doing" cards={cards} setCards={setCards} headingColor="text-blue-200" handleCardDragStart={handleCardDragStart} handleCardDragEnd={handleCardDragEnd} handleColumnDrop={handleColumnDrop} draggingCardId={draggingCardId} />
      <Column title="Complete" column="done" cards={cards} setCards={setCards} headingColor="text-emerald-200" handleCardDragStart={handleCardDragStart} handleCardDragEnd={handleCardDragEnd} handleColumnDrop={handleColumnDrop} draggingCardId={draggingCardId} />
      <BurnBarrel setCards={setCards} handleBurnBarrelDrop={handleBurnBarrelDrop} />
    </div>
  )
}

const Column = ({ title, headingColor, column, cards, setCards, handleCardDragStart, handleCardDragEnd, handleColumnDrop, draggingCardId }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault()
    highlightIndicator(e)
    setActive(true)
  }

  const clearHighlights = (els) => {
    const indicators = els || getIndicators()
    indicators.forEach(i => i.style.opacity = 0)
  }

  const highlightIndicator = (e) => {
    const indicators = getIndicators()
    clearHighlights(indicators)
    const el = getNearestIndicator(e, indicators)
    el.element.style.opacity = 1
  }

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50
    const el = indicators.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = e.clientY - (box.top + DISTANCE_OFFSET)
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY, element: indicators[indicators.length - 1] })
    return el
  }

  const getIndicators = () => Array.from(document.querySelectorAll(`[data-column="${column}"]`))
  const handleDragLeave = () => { setActive(false); clearHighlights() }

  const handleDrop = (e) => {
    setActive(false)
    clearHighlights()
    const indicators = getIndicators()
    const { element } = getNearestIndicator(e, indicators)
    const beforeId = element.dataset.before || "-1"
    handleColumnDrop(e, column, beforeId)
  }

  const filteredCards = cards.filter(card => card.column === column)

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`text-2xl font-bold ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{filteredCards.length}</span>
      </div>
      <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}>
        {filteredCards.map((card) => (
          <div key={card.id}>
            <DropIndicator beforeId={card.id} column={card.column} />
            <Card {...card} handleDragStart={handleCardDragStart} handleDragEnd={handleCardDragEnd} isDragging={draggingCardId === card.id} />
          </div>
        ))}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  )
}

const Card = ({ title, id, column, handleDragStart, handleDragEnd, isDragging }) => (
  <>
    <DropIndicator beforeId={id} column={column} />
    <div draggable onDragStart={(e) => handleDragStart(e, { title, id, column })} onDragEnd={handleDragEnd} className={`cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing ${isDragging ? "opacity-50" : ""}`}>
      <p className="text-sm text-neutral-100">{title}</p>
    </div>
  </>
)

const DropIndicator = ({ beforeId, column }) => (
  <div data-before={beforeId || "-1"} data-column={column} className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0 transition-opacity" />
)

const BurnBarrel = ({ setCards, handleBurnBarrelDrop }) => {
  const [active, setActive] = useState(false)
  return (
    <div onDrop={(e) => { handleBurnBarrelDrop(e); setActive(false) }} onDragOver={(e) => { e.preventDefault(); setActive(true) }} onDragLeave={() => setActive(false)} className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${active ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bg-neutral-500/20 text-neutral-500"}`}>
      {active ? <FaFire className="animate-bounce" /> : <FaTrash />}
    </div>
  )
}

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("")
  const [adding, setAdding] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim().length) return;
    const tempId = `temp-${Math.random().toString(36).substring(2, 9)}`;
    const localCard = {
      id: tempId,
      title: text.trim(),
      column,
      order_in_column: 0,
    };
  
    const payload = {
      title: text.trim(),
      column,
      order_in_column: 0
    };
  
    // Optimistic UI
    setCards((prev) => {
      const updated = [...prev, localCard];
      const ordered = updated
        .filter(c => c.column === column)
        .sort((a, b) => (a.order_in_column || 0) - (b.order_in_column || 0));
      ordered.forEach((c, i) => c.order_in_column = i * 10);
      return updated;
    });
  
    setText("");
    setAdding(false);
  
    try {
      const serverCard =await addKanbanCard(payload);
      setCards(prev => prev.map(card =>
        card.id === tempId ? { ...serverCard } : card
      ));
    } catch (err) {
      console.error("Failed to add card", err?.response?.data || err.message);
      setCards(prev => prev.filter(card => card.id !== tempId));
    }
  };
  
  

  return adding ? (
    <form onSubmit={handleSubmit}>
      <textarea onChange={(e) => setText(e.target.value)} autoFocus className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0" placeholder="Add new task..." />
      <div className="mt-1.5 flex items-center justify-end gap-1.5">
        <button type="button" onClick={() => setAdding(false)} className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50">Close</button>
        <button type="submit" className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-900 transition-colors hover:bg-neutral-300">
          <span>Add</span><FaPlus />
        </button>
      </div>
    </form>
  ) : (
    <button onClick={() => setAdding(true)} className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-100">
      <span>Add card</span><FaPlus />
    </button>
  )
}

export default Kanban;
