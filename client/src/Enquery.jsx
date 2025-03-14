

import React from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function Enquery() {
    let saveEnquery = (e) => {
        e.preventDefault();

        let formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value
        };

        axios.post("http://localhost:3000/web/enquery/insert", formData).then((res)=>{
            console.log(res.data);
            toast.success("Enquery Submitted Successfully done");
            setEnqueries([...enqueries, res.data]);
            
        });
    }
    const [enqueries, setEnqueries] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:3000/web/enquery/list").then((res) => {
            setEnqueries(res.data);
        });
    }, []);
    let deleteEnquery = (id) => {
        axios.delete(`http://localhost:3000/web/enquery/delete/${id}`).then(() => {
            toast.success("Enquery Deleted Successfully");
            setEnqueries(enqueries.filter(enquery => enquery._id !== id));
        });
    };


    return (
        <>
            <ToastContainer />
            <h1 className="text-[40px] text-center py-6 font-bold">User Enquery Form</h1>
            <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl p-4">
                <form action="" onSubmit={saveEnquery} className="w-full bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No.</label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your phone no.." className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" placeholder="Enter your message" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" rows="4"></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                </div>
                </form>
            </div>
            <div className="w-full max-w-4xl p-4 mt-8">
                <h2 className="text-[30px] text-center py-4 font-bold">Enquery List</h2>
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-md">
                <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr No.</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {enqueries.map((enquery, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{enquery.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquery.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquery.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquery.message}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="px-2 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={() => deleteEnquery(enquery._id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </>
        );
}

export default Enquery;