import React from 'react';
import Card from '@mui/material/Card';
import Col from 'react-bootstrap/Col';
import BuyedCourseBase from './BuyedCourseBase';

export default function BuyedCourse(props) {
    return (
        <Col {...props.grid} className="!mt-3">
            <Card elevation={3} className="mt-5">
                <BuyedCourseBase {...props} />
            </Card>
        </Col>
    );
}
