import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Coffee has been deleted.",
                "success"
                )
                const remaining = coffees.filter(cof => cof._id !== _id);
                setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-stone-300 shadow-xl p-3 flex">
      <figure className="w-1/3">
        <img src={photo} alt="Movie" />
      </figure>
      <div className="ml-4 flex justify-between w-2/3 pr-4">
        <div className="">
          <h2 className="card-title">Name : {name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn">Button</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
