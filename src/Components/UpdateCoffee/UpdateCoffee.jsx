// import Swal from 'sweetalert2'
// const UpdateCoffee = () => {


// const handleUpdateCoffee = event =>{
//     event.preventDefault();
//     const form  = event.target;
//     const name = form.name.value;
//     const chef= form.chef.value;
//     const supplier = form.supplier.value;
//     const taste= form.taste.value;
//     const category = form.category.value;
//     const details = form.details.value;
//     const photo = form.photo.value;
//     const newCoffee = {name,chef,supplier,taste,category,details,photo};
//     console.log(newCoffee);



//     // send to data server
//     fetch('http://localhost:5000/coffee',{
//         method:'POST',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(newCoffee)
//     })
//        .then(res => res.json())
//        .then(data =>{
//         console.log(data);
//         if(data.insertedId){
//             Swal.fire({
//                 title: 'success',
//                 text: 'User added to successFully',
//                 icon: 'success',
//                 confirmButtonText: 'Cool'
//               })
//         }
//        })

// }
// return (
//     <div className="bg-stone-200  w-1/2 mx-auto rounded-lg mt-36 p-5 text-center">
//       <h2 className="text-3xl mt-3 font-extrabold">Update New Coffee</h2>
//       <p className="mt-3">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque,
//         maxime veniam cupiditate perspiciatis totam rerum fugit libero.
//         Reiciendis eligendi facere sapiente accusamus unde delectus eaque rem
//         molestiae velit quisquam.
//       </p>
//       <div className="">
//         <form onSubmit={handleUpdateCoffee} className="card-body">
//           <div className="md:flex">
//             <div className="form-control md:w-1/2">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Coffee Name"
//                 className="input"
//                 required
//               />
//             </div>
//             <div className="form-control md:w-1/2 ml-4">
//               <label className="label">
//                 <span className="label-text">Chef</span>
//               </label>
//               <input
//                 type="text"
//                 name="chef"
//                 placeholder="Enter coffee chef"
//                 className="input "
//                 required
//               />
//             </div>
//             </div>
//           <div className="flex">
//             <div className="form-control  md:w-1/2">
//               <label className="label">
//                 <span className="label-text">Supplier</span>
//               </label>
//               <input
//                 type="text"
//                 name="supplier"
//                 placeholder="Enter coffee supplier"
//                 className="input"
//                 required
//               />
//             </div>
//             <div className="form-control md:w-1/2 ml-4">
//               <label className="label">
//                 <span className="label-text">Taste</span>
//               </label>
//               <input
//                 type="text"
//                 name="taste"
//                 placeholder="taste"
//                 className="input"
//                 required
//               />
//             </div>
//             </div>
//           <div className="flex">
//             <div className="form-control  md:w-1/2">
//               <label className="label">
//                 <span className="label-text">Category</span>
//               </label>
//               <input
//                 type="text"
//                 name="category"
//                 placeholder="Enter coffee category"
//                 className="input "
//                 required
//               />
//             </div>
//             <div className="form-control md:w-1/2 ml-4">
//               <label className="label">
//                 <span className="label-text">Details</span>
//               </label>
//               <input
//                 type="text"
//                 name="details"
//                 placeholder="Enter coffee details"
//                 className="input"
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-control w-full">
//               <label className="label">
//                 <span className="label-text">Photo</span>
//               </label>
//               <input
//                 type="text"
//                 name="photo"
//                 placeholder="photo url"
//                 className="input "
//                 required
//               />
//             </div>
       
//             <input type="submit" value="Update Coffee" className="btn  bg-[#D2B48C] border-black" />
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateCoffee;



import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateCoffee = () => {

   const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(updateCoffee);

        // send to data server
        fetch(`http://localhost:5000/Coffee/${_id}`, {
            method: 'PUT', // or 'POST' if adding new coffee
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee information updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-stone-200 w-1/2 mx-auto rounded-lg mt-36 p-5 text-center">
            <h2 className="text-3xl mt-3 font-extrabold">Update Coffee{name}</h2>
           
            <div className="">
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Enter Coffee Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input
                                type="text"
                                name="chef"
                                defaultValue={chef}
                                placeholder="Enter coffee chef"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                defaultValue={supplier}
                                placeholder="Enter coffee supplier"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input
                                type="text"
                                name="taste"
                                defaultValue={taste}
                                placeholder="Taste"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                defaultValue={category}
                                placeholder="Enter coffee category"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input
                                type="text"
                                name="details"
                                defaultValue={details}
                                placeholder="Enter coffee details"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <input type="submit" value="Update Coffee" className="btn bg-[#D2B48C] border-black mt-4 w-full" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;

