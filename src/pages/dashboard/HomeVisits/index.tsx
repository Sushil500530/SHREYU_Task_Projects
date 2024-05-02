/* eslint-disable react-hooks/rules-of-hooks */
import { Col, Dropdown, Row,ButtonGroup } from "react-bootstrap";
import ShreyuDatepicker from "../../../components/Datepicker";
import { useState } from "react";
import FeatherIcon from 'feather-icons-react';

const HomeVisitsDashboard = () => {
    const [dateRange, setDateRange] = useState<any>([
        new Date(),
        new Date().setDate(new Date().getDate() + 7),
      ]);
      const [startDate, endDate] = dateRange;
    
      /*
       * handle date change
       */
      const onDateChange = (date: Date) => {
        if (date) {
          setDateRange(date);
        }
      };
    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Dashboard</h4>
                        <div className="page-title-right">
                            <form className="float-md-end mt-3 mt-md-0">
                                <Row className="g-2">
                                    <Col md={"auto"}>
                                        <div className="mb-1 mb-sm-0">
                                            <ShreyuDatepicker
                                                selectsRange
                                                startDate={startDate}
                                                endDate={endDate}
                                                hideAddon={true}
                                                dateFormat={"yyyy/MM/dd"}
                                                onChange={(date) => {
                                                    onDateChange(date);
                                                }}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={"auto"}>
                                        <Dropdown as={ButtonGroup} align="end">
                                            <Dropdown.Toggle
                                                variant="primary"
                                                id="dropdown-basic"
                                                className="cursor-pointer"
                                            >
                                                <i className="uil uil-file-alt me-1"></i>Download
                                                <i className="icon">
                                                    <FeatherIcon icon="chevron-down" />
                                                </i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item className="notify-item" href="#/">
                                                    <FeatherIcon
                                                        icon="mail"
                                                        className="icon-dual icon-xs me-2"
                                                    />
                                                    <span>Email</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="notify-item" href="#/">
                                                    <FeatherIcon
                                                        icon="printer"
                                                        className="icon-dual icon-xs me-2"
                                                    />
                                                    <span>Print</span>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item className="notify-item" href="#/">
                                                    <FeatherIcon
                                                        icon="file"
                                                        className="icon-dual icon-xs me-2"
                                                    />
                                                    <span>Re-Generate</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default HomeVisitsDashboard;