import React, { useState } from 'react';
import './profile.css';
import p_img from '../../assets/handsome-happy-bearded-man.jpg';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Passionate about technology and innovation.',
    donations: '12',
    money_donated: '10,000',
    causes_supported: '8',
  });

  const [formData, setFormData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-left">
          <img src={p_img} alt="Profile" className="profile-img" />
        </div>
        <div className="profile-right">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <div className="stats">
            <p><strong> Donations:</strong> {user.donations}</p>
            <p><strong> Money Donated:</strong> ₹{user.money_donated}</p>
            <p><strong> Causes Supported:</strong> {user.causes_supported}</p>
          </div>
          <button className="edit-button" onClick={() => setIsEditing(true)}> Edit Profile</button>
        </div>
      </div>

      {isEditing && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Profile</h3>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <label>Bio</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
            <label>Donations</label>
            <input type="number" name="donations" value={formData.donations} onChange={handleChange} />
            <label>Money Donated</label>
            <input type="text" name="money_donated" value={formData.money_donated} onChange={handleChange} />
            <label>Causes Supported</label>
            <input type="number" name="causes_supported" value={formData.causes_supported} onChange={handleChange} />

            <div className="modal-actions">
              <button className="save-button" onClick={handleSave}>Save</button>
              <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
