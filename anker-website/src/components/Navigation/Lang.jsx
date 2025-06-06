import { useTranslation } from "react-i18next"


const Lang = () => {
    const {i18n} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
  return (
    <div>
        <select onChange={(e) => changeLanguage(e.target.value)} className="cursor-pointer">
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        </select>
    </div>
  )
}

export default Lang