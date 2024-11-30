import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Heading } from '../../components/Typography';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen">
          <div className="p-4">
            <Heading className="text-xl">Admin Dashboard</Heading>
          </div>
          <nav className="mt-4">
            <Link
              to="/admin"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Overview
            </Link>
            <Link
              to="/admin/pages"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Pages
            </Link>
            <Link
              to="/admin/shop"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Shop
            </Link>
            <Link
              to="/admin/media"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Media Library
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}