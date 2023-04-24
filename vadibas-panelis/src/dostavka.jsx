import React, { useState } from 'react';

function TextWithButton() {
  // Состояние для определения состояния разворачивания дополнительного текста
  const [isExpanded, setIsExpanded] = useState(false);

  // Функция-обработчик для переключения состояния разворачивания дополнительного текста
  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>Основной текст</p>
      <button onClick={handleToggleExpansion}>
        {/* Условный рендеринг на основе состояния isExpanded */}
        {isExpanded ? 'Скрыть' : 'Подробнее'}
      </button>
      {/* Условный рендеринг на основе состояния isExpanded */}
      {isExpanded && (
        <div>
          <p>Дополнительный текст</p>
          {/* Еще дополнительный текст */}
        </div>
      )}
    </div>
  );
}

export default TextWithButton;