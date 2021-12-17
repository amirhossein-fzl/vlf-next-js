import React from 'react';

export default function Title({ title }) {
    return (
        <div className="px-10 py-10 mt-24 mb-6">
            <h3 className="sectionTitle sectionTitleCenter">
                <b></b>
                <span className="sectionTitleCenter">{title}</span>
                <b></b>
            </h3>
        </div>
    );
};