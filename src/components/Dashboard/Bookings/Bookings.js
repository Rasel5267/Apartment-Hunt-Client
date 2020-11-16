import React from 'react';
import { Table } from 'react-bootstrap';
import './Bookings.css';
import logo from '../../../logos/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHome , faNotesMedical } from '@fortawesome/free-solid-svg-icons'

const Bookings = () => {
    return (
        <div className="bookings">
            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <div className="sidebar">
                        <div className="logo">
                        <Link to="/"><img  src={logo} alt="logo" /></Link>
                        </div>
                        <div className="mt-5">
                            <p><Link className="link" to="bookings"><span className="booking-link"><FontAwesomeIcon icon={faNotesMedical} size="xs"/> Booking list</span></Link></p>
                            <p><Link className="link" to="addHouse"><span><FontAwesomeIcon icon={faPlus} size="xs"/> Add Rent House</span></Link></p>
                            <p><Link className="link" to="myRent"><span><FontAwesomeIcon icon={faHome} size="xs"/> My Rent</span></Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 col-sm-12">
                    <div className="sec__title d-flex">
                        <h3 className="pl-3">Booking List</h3>
                        <h5 className="ml-auto user__name">Mahadiul</h5>
                    </div>
                    <div className="dashboard__content">
                        <div className="table__content">
                            <Table borderless size="sm">
                                <thead className="mt-3">
                                    <tr className="tableRow">
                                        <th className="pl-3">Name</th>
                                        <th className="pl-3">Email</th>
                                        <th className="pl-3">Phone No</th>
                                        <th className="pl-3">Message</th>
                                        <th className="pl-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{width: '20%'}} className="pl-3">Mahadiul Hasan</td>
                                        <td style={{width: '20%'}} className="pl-3">mahadiulhasan49@gmail.com</td>
                                        <td style={{width: '10%'}} className="pl-3">017XXXXXXXX</td>
                                        <td style={{width: '25%'}} className="pl-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis fugit consequuntur itaque vero ipsam.</td>
                                        <td style={{width: '10%'}} className="pl-3">
                                            <select className='status'>
                                                <option>Pending</option>
                                                <option>On Going</option>
                                                <option>Done</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '20%'}} className="pl-3">Mahadiul Hasan</td>
                                        <td style={{width: '20%'}} className="pl-3">mahadiulhasan49@gmail.com</td>
                                        <td style={{width: '10%'}} className="pl-3">017XXXXXXXX</td>
                                        <td style={{width: '25%'}} className="pl-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis fugit consequuntur itaque vero ipsam.</td>
                                        <td style={{width: '10%'}} className="pl-3">
                                            <select className='status'>
                                                <option>Pending</option>
                                                <option>On Going</option>
                                                <option>Done</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '20%'}} className="pl-3">Mahadiul Hasan</td>
                                        <td style={{width: '20%'}} className="pl-3">mahadiulhasan49@gmail.com</td>
                                        <td style={{width: '10%'}} className="pl-3">017XXXXXXXX</td>
                                        <td style={{width: '25%'}} className="pl-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis fugit consequuntur itaque vero ipsam.</td>
                                        <td style={{width: '10%'}} className="pl-3">
                                            <select className='status'>
                                                <option>Pending</option>
                                                <option>On Going</option>
                                                <option>Done</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Bookings;