import { useTranslation } from "react-i18next"


const Lang = () => {
    const {i18n} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

  return (
    <div>
        <select 
          name="language-selector"
          id="language-selector"
          aria-label="language selector"
          onChange={(e) => changeLanguage(e.target.value)} className="cursor-pointer">
          <option aria-label="Deutsch" value="de">Deutsch</option>
          <option aria-label="English" value="en">English</option>
          {/**
          <option aria-label="Français" value="fr">Français</option>
          */}
        </select>
    </div>
  )
}

export default Lang