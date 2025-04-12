import React from 'react';

const Settings = () => {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="grid gap-6 max-w-2xl">
        <div className="card bg-base-100">
          <div className="card-body">
            <h2 className="card-title">Profile Settings</h2>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Display Name</span>
              </label>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="john.doe@example.com" className="input input-bordered w-full" />
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;