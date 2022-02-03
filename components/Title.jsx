import React from 'react';
import clsx from 'clsx';

export default function Title({ title, className }) {
    return (
        <div className={clsx('px-10 py-10 mt-24 mb-6', className)}>
            <h3 className="sectionTitle sectionTitleCenter">
                <b></b>
                <span className="sectionTitleCenter">{title}</span>
                <b></b>
            </h3>
        </div>
    );
};