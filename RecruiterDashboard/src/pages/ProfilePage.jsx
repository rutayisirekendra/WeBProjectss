import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';

const defaultProfile = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@techcorp.com',
  phone: '+1 (555) 123-4567',
  companyName: 'TechCorp Solutions',
  companyEmail: 'info@techcorp.com',
  description: 'Leading technology solutions provider specializing in enterprise software development and digital transformation.',
  website: 'https://techcorp.com',
  address: '123 Tech Street, Silicon Valley, CA 94025',
  industry: 'Technology',
  logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop',
};

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(defaultProfile);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Company Profile</h1>
        <p className="mt-1 text-gray-600">Manage your personal and company information.</p>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={profile.logoUrl}
              alt={profile.companyName}
              className="w-20 h-20 rounded-lg object-cover shadow-md"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-gray-500">{profile.email}</p>
              <p className="text-gray-500">{profile.phone}</p>
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={() => setIsEditing(!isEditing)}
            className="bg-teal-50 text-teal-700 hover:bg-teal-100"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="First Name"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                required
              />
              <Input
                label="Last Name"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="Personal Email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                required
              />
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Company Information</h3>
              <div className="space-y-6">
                <Input
                  label="Company Name"
                  value={profile.companyName}
                  onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                  required
                />
                <Input
                  label="Company Email"
                  type="email"
                  value={profile.companyEmail}
                  onChange={(e) => setProfile({ ...profile, companyEmail: e.target.value })}
                  required
                />
                <Input
                  label="Website"
                  type="url"
                  value={profile.website}
                  onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                />
                <Input
                  label="Industry"
                  value={profile.industry}
                  onChange={(e) => setProfile({ ...profile, industry: e.target.value })}
                />
                <Input
                  label="Address"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                />
                <Textarea
                  label="Company Description"
                  value={profile.description}
                  onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                  rows={4}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <Button 
                type="submit"
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                Save Changes
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Company Information</h3>
                <div className="mt-3 space-y-3">
                  <p><span className="font-medium">Company:</span> {profile.companyName}</p>
                  <p><span className="font-medium">Industry:</span> {profile.industry}</p>
                  <p><span className="font-medium">Email:</span> {profile.companyEmail}</p>
                  <p><span className="font-medium">Website:</span> {profile.website}</p>
                  <p><span className="font-medium">Address:</span> {profile.address}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Description</h3>
                <p className="mt-3 text-gray-600">{profile.description}</p>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}