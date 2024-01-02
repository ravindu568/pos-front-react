import axios from "axios";
import { useEffect, useState } from "react";

interface Customer{
    id:string,
    name:string,
    address:string,
    salary:number
}


const Customer:React.FC=()=>{

    const [customers,setCustomers]=useState<Customer[]>([]);

    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [salary,setSalary]=useState<number | ''>('');

    const saveCustomer=async ()=>{
        
        try{
             const response=await axios.post('http://localhost:3000/api/v1/customers/create',{
                name,address,salary
             });
             
             console.log(response);
             setName('');
             setAddress('');
             setSalary('');
        }catch(e){
            console.log(e);
        }


    }

    useEffect(()=>{
            findAllCustomers();
    },[])

    const findAllCustomers=async ()=>{

        const response=await axios.get('http://localhost:3000/api/v1/customers/findAll');
        console.log(response);

    }

    return (
        <>
        
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="form-group">
                        <label htmlFor="customerName">Customer Name</label>
                        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="customerName" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">

                         <label htmlFor="customerAddress">Customer Address</label>
                        <input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" className="form-control" id="customerAddress" />
                </div>
                <div className="col-12 col-sm-6 col-md-4">

                        <label htmlFor="customerSalary">Salary</label>
                        <input value={salary} onChange={(e)=>{setSalary(e.target.value==''?'':parseFloat(e.target.value))}} type="text" className="form-control" id="customersalary" />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <button onClick={saveCustomer} className="btn btn-primary col-12">Save Customer</button>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12">
                    <div className="col-12">
                        <input type="search" className="form-control" placeholder="Search Customer Here"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-bordered">
                    
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>#10029</td>
                                    <td>Ravindu</td>
                                    <td>kundasale</td>
                                    <td>25000</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm">Delete</button>
                                    
                                    </td>
                                    <td>
                                    <button className="btn btn-outline-success btn-sm">Update</button>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Customer;