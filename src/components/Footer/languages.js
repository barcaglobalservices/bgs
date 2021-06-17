import React from 'react';
import i18n from '../../scripts/i18n';
import { withTranslation } from 'react-i18next';

function Languages ({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <button onClick={() => changeLanguage('nl')}>nl</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </div>
  )
}

export default withTranslation()(Languages);