import React from "react";
import Card from "@mui/material/Card";
import Col from "react-bootstrap/Col";
import CourseCardBase from './CourseCardBase';

export default function CourseCard(props) {
    return (
        <Col {...props.grid} className="relative !mt-3">
            <Card elevation={3} className="mt-5">
                <CourseCardBase {...props} />
            </Card>
        </Col>
    );
}
