import React, { useState } from 'react';
import Nav from '../components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt, faEllipsisV, faEye, faExclamationTriangle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Batch() {
    const testData = [
        {vendor: "Bauhof Group AS", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
        {vendor: "test1", date: "09/27/20", total: 1300,  vat: 500},
    ]

    return (
      <div className="lg:container lg:mx-auto">
        <Nav />
        <div className="py-0 bg-primary px-4">
            <p className="text-2xl text-accent-1 lg:text-4xl font-bold">
                Batch
            </p>
            <div className="flex flex-row justify-between lg:px-0 xs:px-0 py-2">
                <div className="text-white text-left">
                    <p className="text-sm lg:text-lg">STARTED</p>
                    <p className="text-lg font-bold lg:text-xl">
                        <span>Oct 21</span>
                        <span className="text-sm px-2">(21 days ago)</span>
                    </p>
                </div>
                <div className="text-white text-center">
                    <p className="text-sm lg:text-lg">RECEIPTS</p>
                    <p className="text-lg font-bold lg:text-xl">60</p>
                </div>
                <div className="text-white text-center">
                    <p className="text-sm lg:text-lg">REFUND</p>
                    <p className="text-lg font-bold lg:text-xl">160.00€</p>
                </div>
            </div>
            <div className="md:w-full lg:w-3/4 mx-auto py-8">
                    <button className="bg-accent-2 w-full text-white px-full py-2 rounded-full font-bold border border-accent-2">
                    <span className="px-2"><FontAwesomeIcon icon={faReceipt} /></span>  
                    <span className="px-2">Add receipt</span>
                    </button>
            </div>
        </div>
        <div className="px-4">
            <p className="text-2xl text-accent-1 lg:text-4xl font-bold pt-4">
                Receipts
            </p>
            <div className="pt-2">
                <table className="xs:table-responsive-sm table table-sm text-sm lg:text-lg text-white">
                    <thead>
                        <tr className="bg-secondary">
                        <th scope="col" className="fit"></th>
                        <th scope="col">Vendor</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total</th>
                        <th scope="col">VAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testData.map((props) => {
                            return (
                                <Row {...props} />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
}

function Row(props) {
    const [open, setOpen] = useState(false);

    const { vendor, date, total, vat } = props;
    return (
        <tr scope="row">
            <td className="fit pr-5" onClick={() => setOpen(!open)}>
                <div className="pr-2 inline-block">
                    <div className="relative">
                        <button onClick={() => setOpen(!open)} className="relative z-10 block"><FontAwesomeIcon icon={faEllipsisV}/></button>
                        {open ? 
                            <div className="absolute left-0 mt-0 py-1 w-48 z-20 bg-secondary rounded-sm shadow-xl">
                                <a href="#" className="block px-4 py-2 text-white"><span className="pr-2 text-white"><FontAwesomeIcon icon={faEdit}/></span>View/Edit Receipt</a>
                                <a href="#" className="block px-4 py-2 text-white"><span className="pr-3 text-red-700"><FontAwesomeIcon icon={faTrash}/></span>Delete Receipt</a>
                            </div> 
                        : null}
                    </div>           
                </div>
                <span className="pl-1 text-accent-2"><FontAwesomeIcon icon={faEye}/></span>
                <span className="pl-1 text-accent-1"><FontAwesomeIcon icon={faExclamationTriangle}/></span>
            </td>
            <td>{vendor}</td>
            <td>{date}</td>
            <td>{(total/100).toFixed(2)}</td>
            <td>{(vat/100).toFixed(2)}</td>
        </tr>
    );
}