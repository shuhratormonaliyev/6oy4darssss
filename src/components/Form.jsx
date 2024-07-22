import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address: '',
        employees: '',
        description: '',
        profilePic: '',
        links: []
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [newLink, setNewLink] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('companyData', JSON.stringify(formData));
        alert('Data saved to localStorage');
    };

    const handleUploadClick = () => {
        setIsModalOpen(true);
    };

    const handleLinkClick = () => {
        setLinkModalOpen(true);
    };

    const handleProfilePicChange = (e) => {
        setFormData({
            ...formData,
            profilePic: e.target.value
        });
        setIsModalOpen(false);
    };

    const handleAddLink = () => {
        setFormData({
            ...formData,
            links: [...formData.links, newLink]
        });
        setNewLink('');
        setLinkModalOpen(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="profile-pic">
                <button type="button" onClick={handleUploadClick}>Yuklash</button>
                {formData.profilePic && <img src={formData.profilePic} alt="Profile" />}
            </div>
            <label htmlFor="company-name">Kompaniya nomi:</label>
            <input type="text" id="company-name" name="companyName" value={formData.companyName} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="phone">Telefon raqami:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder='+998' />

            <div className="links">
                <button type="button" onClick={handleLinkClick}>Add Links</button>
                <ul>
                    {formData.links.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </div>

            <label htmlFor="country">Davlat:</label>
            <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                <option value="uz">Uzbekistan</option>
                <option value="uz">Rassia</option>
                <option value="uz">England</option>

                {/* Add more options as needed */}
            </select>

            <label htmlFor="city">Shahar:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />

            <label htmlFor="address">Yashash joyi:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

            <label htmlFor="employees">Hodimlar soni:</label>
            <input type="number" id="employees" name="employees" value={formData.employees} onChange={handleChange} required />

            <label htmlFor="description">Izoh:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>

            <button type="submit">Keyingisi</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Upload Profile Picture</h2>
                        <input type="text" placeholder="Image URL" onChange={handleProfilePicChange} />
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}

            {linkModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add Social Link</h2>
                        <input type="text" value={newLink} onChange={(e) => setNewLink(e.target.value)} />
                        <button onClick={handleAddLink}>Add</button>
                        <button onClick={() => setLinkModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </form>
    );
};

export default Form;
