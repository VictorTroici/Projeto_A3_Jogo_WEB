// src/components/Settings.js
import React from 'react';

function Settings({ onReset }) {
    return (
        <div className="settings">
            <button onClick={onReset}>Reiniciar Jogo</button>
        </div>
    );
}

export default Settings;
