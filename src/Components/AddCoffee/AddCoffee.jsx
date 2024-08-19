import Swal from 'sweetalert2'
const AddCoffee = () => {


const handleAddCoffee = event =>{
    event.preventDefault();
    const form  = event.target;
    const name = form.name.value;
    const chef= form.chef.value;
    const supplier = form.supplier.value;
    const taste= form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name,chef,supplier,taste,category,details,photo};
    console.log(newCoffee);



    // send to data server
    fetch('http://localhost:5000/coffee',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'User added to successFully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
       })

}









  return (
    <div className="bg-stone-200 w-1/2 mx-auto rounded-lg mt-36 p-5 text-center">
      <h2 className="text-3xl mt-3 font-extrabold">Add New Coffee</h2>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque,
        maxime veniam cupiditate perspiciatis totam rerum fugit libero.
        Reiciendis eligendi facere sapiente accusamus unde delectus eaque rem
        molestiae velit quisquam.
      </p>
      <div className="">
        <form onSubmit={handleAddCoffee} className="card-body">
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className="input"
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
                placeholder="Enter coffee chef"
                className="input "
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
                placeholder="Enter coffee supplier"
                className="input"
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
                placeholder="taste"
                className="input"
                required
              />
            </div>
            </div>
          <div className="md:flex gap-4">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input "
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
                placeholder="Enter coffee details"
                className="input"
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
                placeholder="photo url"
                className="input "
                required
              />
            </div>
       
            <input type="submit" value="Add Coffee" className="btn  bg-[#D2B48C] border-black" />
          
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
