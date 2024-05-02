import { Button, Form } from "react-bootstrap";
import { GlobalFilter } from "./ContractsTable";

const MidItemBar = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center px-3 pb-3 ">
                <div className="d-flex justify-content-start align-items-center gap-1">
                    Show <Form.Control className='w-25' type="number" placeholder="10" required /> records
                </div>
                <div className='d-flex align-items-center gap-1 bg-black text-white px-2 rounded-1'>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                        <i className='uil uil-copy text-white fs-4'></i>
                        Coppy
                    </Button>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                        <i className='bi bi-file-earmark-x-fill text-white fs-4'></i>
                        Exel
                    </Button>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                        <i className='uil uil-copy text-white fs-4'></i>
                        CVS
                    </Button>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0'>
                        <i className='bi bi-file-earmark-pdf-fill text-white fs-4'></i>
                        PDF
                    </Button>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border-0 btn-hover'>
                        <i className='uil uil-eye text-white fs-4'></i>
                        <i className='bi bi-caret-down-fill text-white fs-4'></i>
                    </Button>

                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <GlobalFilter setGlobalFilter={5} searchBoxClass="suhil" />
                </div>
            </div>
        </>
    );
};

export default MidItemBar;