import React from 'react';

const ModalEditTable = () => {
    return (
        <div className="bg-white border rounded-5">
            <div className="wrapper-editor">

                <div className="my-5">
                    <div className='text-center'>
                        <span className="">
                            <a href="" className="btn btn-info btn-rounded btn-sm waves-effect waves-light">
                                Add <i className="fas fa-plus-square ml-1"></i>
                            </a>
                        </span>

                        <span className="buttonEditWrapper">
                            <button className="btn btn-info btn-rounded btn-sm buttonEdit waves-effect waves-light">
                                Edit <i className="fas fa-pencil-square-o ml-1"></i>
                            </button>
                        </span>

                        <span className="">
                            <button className="btn btn-danger btn-sm btn-rounded buttonDelete waves-effect waves-light">
                                Delete <i className="fas fa-times ml-1"></i>
                            </button>
                        </span>
                    </div>
                </div>

                <div className="">
                    <div className="row">
                        <div className="col-sm-12">
                            <table id="dtBasicExample" className="table table-striped table-bordered dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="dtBasicExample_info">
                                <thead>
                                    <tr role="row">
                                        <th className="th-sm sorting_asc" tabIndex="0" aria-controls="dtBasicExample" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name : activate to sort column descending" style={{width: "143px"}}>Name</th>
                                        <th className="th-sm sorting" tabIndex="0" aria-controls="dtBasicExample" rowSpan="1" colSpan="1" aria-label="Position : activate to sort column ascending" style={{width: "218px"}}>Position</th>
                                        <th className="th-sm sorting" tabIndex="0" aria-controls="dtBasicExample" rowSpan="1" colSpan="1" aria-label="Office : activate to sort column ascending" style={{width: "104px"}}>Office</th>
                                        <th className="th-sm sorting" tabIndex="0" aria-controls="dtBasicExample" rowSpan="1" colSpan="1" aria-label="Age : activate to sort column ascending" style={{width: "80px"}}>Age</th>
                                        <th className="th-sm sorting" tabIndex="0" aria-controls="dtBasicExample" rowSpan="1" colSpan="1" aria-label="Start date : activate to sort column ascending" style={{width: "93px"}}>Start date</th>
                                        <th className="th-sm sorting" tabIndex="0" aria-controls="dtBasicExample" rowSpan="1" colSpan="1" aria-label="Salary : activate to sort column ascending" style={{width: "80px"}}>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="odd highlight">
                                    <td>Airi Satou</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                    <td>$162,700</td>
                                </tr><tr role="row" className="even" >
                                    <td>Angelica Ramos</td>
                                    <td>Chief Executive Officer (CEO)</td>
                                    <td>London</td>
                                    <td>47</td>
                                    <td>2009/10/09</td>
                                    <td>$1,200,000</td>
                                </tr><tr role="row" className="odd" >
                                    <td>Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                    <td>66</td>
                                    <td>2009/01/12</td>
                                    <td>$86,000</td>
                                </tr><tr role="row" className="even" >
                                    <td>Bradley Greer</td>
                                    <td>Software Engineer</td>
                                    <td>London</td>
                                    <td>41</td>
                                    <td>2012/10/13</td>
                                    <td>$132,000</td>
                                </tr><tr role="row" className="odd" >
                                    <td>Brenden Wagner</td>
                                    <td>Software Engineer</td>
                                    <td>San Francisco</td>
                                    <td>28</td>
                                    <td>2011/06/07</td>
                                    <td>$206,850</td>
                                </tr><tr role="row" className="even" >
                                    <td>Brielle Williamson</td>
                                    <td>Integration Specialist</td>
                                    <td>New York</td>
                                    <td>61</td>
                                    <td>2012/12/02</td>
                                    <td>$372,000</td>
                                </tr><tr role="row" className="odd" >
                                    <td>Bruno Nash</td>
                                    <td>Software Engineer</td>
                                    <td>London</td>
                                    <td>38</td>
                                    <td>2011/05/03</td>
                                    <td>$163,500</td>
                                </tr><tr role="row" className="even" >
                                    <td>Caesar Vance</td>
                                    <td>Pre-Sales Support</td>
                                    <td>New York</td>
                                    <td>21</td>
                                    <td>2011/12/12</td>
                                    <td>$106,450</td>
                                </tr><tr role="row" className="odd" >
                                    <td>Cara Stevens</td>
                                    <td>Sales Assistant</td>
                                    <td>New York</td>
                                    <td>46</td>
                                    <td>2011/12/06</td>
                                    <td>$145,600</td>
                                </tr><tr role="row" className="even" >
                                    <td>Cedric Kelly</td>
                                    <td>Senior Javascript Developer</td>
                                    <td>Edinburgh</td>
                                    <td>22</td>
                                    <td>2012/03/29</td>
                                    <td>$433,060</td>
                                </tr></tbody>
                                <tfoot>
                                <tr><th rowSpan="1" colSpan="1">Name
                                    </th><th rowSpan="1" colSpan="1">Position
                                    </th><th rowSpan="1" colSpan="1">Office
                                    </th><th rowSpan="1" colSpan="1">Age
                                    </th><th rowSpan="1" colSpan="1">Start date
                                    </th><th rowSpan="1" colSpan="1">Salary
                                    </th></tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info" id="dtBasicExample_info" role="status" aria-live="polite">
                                Showing 1 to 10 of 57 entries
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div className="dataTables_paginate paging_simple_numbers" id="dtBasicExample_paginate">
                                <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled" id="dtBasicExample_previous">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="0" tabIndex="0" className="page-link waves-effect">Previous</a>
                                    </li>
                                    <li className="paginate_button page-item active">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="1" tabIndex="0" className="page-link waves-effect">1</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="2" tabIndex="0" className="page-link waves-effect">2</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="3" tabIndex="0" className="page-link waves-effect">3</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="4" tabIndex="0" className="page-link waves-effect">4</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="5" tabIndex="0" className="page-link waves-effect">5</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="6" tabIndex="0" className="page-link waves-effect">6</a>
                                    </li>
                                    <li className="paginate_button page-item next" id="dtBasicExample_next">
                                        <a href="#" aria-controls="dtBasicExample" data-dt-idx="7" tabIndex="0" className="page-link waves-effect">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEditTable;