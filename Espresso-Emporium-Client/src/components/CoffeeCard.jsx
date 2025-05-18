import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, price, quantity, photo } = coffee

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // Deleting the coffee
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(coff => coff._id !== _id)
                            setCoffees(remainingCoffees)
                        }
                    })


            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm border-2">
            <figure>
                <img
                    src={photo}
                    alt="" />
            </figure>
            <div className="flex mt-8 w-full justify-around">
                <div>
                    <h2 className='font-bold'>{name}</h2>
                    <p>Price : {price}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                       <Link to={`/coffee/${_id}`}> <button className="btn join-item">View</button></Link>
                        <Link to={`/update-coffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;