import React from 'react';

const Users = () => {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="overflow-x-auto bg-base-100 rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">John Doe</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>john.doe@example.com</td>
              <td>Admin</td>
              <td><div className="badge badge-success">Active</div></td>
              <td>
                <button className="btn btn-ghost btn-xs">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;