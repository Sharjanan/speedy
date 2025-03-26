// LanguageDropdown.jsx
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const languageOptions = {
  "English": {
    label: "English",
    flag: "https://flagcdn.com/us.svg",
  },
  "Français": {
    label: "Français",
    flag: "https://flagcdn.com/fr.svg",
  },
};

const LanguageDropdown = ({ language, setLanguage }) => {
  const handleSelect = (lang) => {
    setLanguage(lang);
  };

  return (
    <Menu>
      <MenuHandler>
        <Button variant="text" size="sm" className="flex items-center gap-2">
          <img
            src={languageOptions[language]?.flag}
            alt={`${language} Flag`}
            className="w-5 h-5 rounded-full"
          />
          {languageOptions[language]?.label}
        </Button>
      </MenuHandler>
      <MenuList>
        {Object.entries(languageOptions).map(([langKey, { label, flag }]) => (
          <MenuItem
            key={langKey}
            className="flex items-center gap-2"
            onClick={() => handleSelect(langKey)}
          >
            <img
              src={flag}
              alt={`${langKey} Flag`}
              className="w-5 h-5 rounded-full"
            />
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageDropdown;
