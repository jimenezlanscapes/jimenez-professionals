
// pages/dashboard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import NavBar from "@/components/NavBar";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabaseClient';

export default function ClientDashboard() {
  const router = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login');
      } else {
        setSession(session);
      }
    });
  }, []);

  if (!session) return <p className='text-center mt-10'>Loading...</p>;

  return (
    <>
      <NavBar />
      <div className="bg-[#f4fdf4] min-h-screen p-6 max-w-screen-xl mx-auto text-gray-900">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Client Dashboard</h1>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-5 gap-2 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">My Services</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="profile">My Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
                <p>Your next service is scheduled for July 3rd, 2025 at 9:00 AM.</p>
                <p>Status: <span className="font-bold text-green-600">Confirmed</span></p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">Scheduled Services</h2>
                <ul className="space-y-3">
                  <li className="bg-white border border-green-300 p-4 rounded-xl shadow-sm">
                    <p><strong>Lawn Maintenance</strong> - Weekly</p>
                    <p>Next Visit: July 3rd, 2025</p>
                  </li>
                  <li className="bg-white border border-green-300 p-4 rounded-xl shadow-sm">
                    <p><strong>Mulch Refresh</strong> - Seasonal</p>
                    <p>Scheduled: August 15th, 2025</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">Billing & Invoices</h2>
                <ul className="space-y-3">
                  <li className="bg-white border border-green-300 p-4 rounded-xl shadow-sm">
                    <p>Invoice #1024 - <strong>$150.00</strong> - <span className="text-green-600">Paid</span></p>
                    <p>Date: June 5, 2025</p>
                  </li>
                  <li className="bg-white border border-yellow-400 p-4 rounded-xl shadow-sm">
                    <p>Invoice #1025 - <strong>$200.00</strong> - <span className="text-yellow-600 font-semibold">Due</span></p>
                    <p>Due Date: July 7, 2025</p>
                    <Button className="bg-green-600 text-white hover:bg-green-700 mt-2">Pay Now</Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card>
              <CardContent className="p-4 space-y-4">
                <h2 className="text-xl font-semibold">Need Help?</h2>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter your subject..." />
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Describe your issue or question..." />
                <Button className="bg-green-600 text-white hover:bg-green-700">Submit Ticket</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardContent className="p-4 space-y-4">
                <h2 className="text-xl font-semibold mb-2">My Profile</h2>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                <Button className="bg-green-600 text-white hover:bg-green-700">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
