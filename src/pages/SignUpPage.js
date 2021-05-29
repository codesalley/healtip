const SignUpPage = () => (
  <div className="w-screen h-screen bg-gray-50 flex justify-center items-center">
    <div className="form-area shadow max-w-xs w-full flex flex-col items-center p-2 rounded-md">
      <h2 className="text-3xl p-5 font-bold">Sing Up</h2>
      <form className="flex flex-col gap-2">
        <div className="form-control">
          <p>
            Full Name
          </p>
          <input type="text" />
        </div>
        <div className="form-control">
          <p>
            Email
          </p>
          <input type="text" />
        </div>
        <div className="form-control">
          <p>
            Password
          </p>
          <input type="text" />
        </div>
        <div className="form-control">
          <p>
            Password Confirmation
          </p>
          <input type="text" />
        </div>
        <div className="form-control">
          <p>
            Location
          </p>
          <input type="text" />
        </div>
        <div className="form-control">
          <p>
            Age
          </p>
          <input type="text" />
        </div>
        <button className="bg-green-400 w-full" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
);

export default SignUpPage;
