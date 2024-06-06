import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function Home() {
  return (
    <>
    {/* <h1 className="text-2xl">Dashboard</h1>
    <Button variant="destructive" size='lg' className="text-blue-400">Click Me</Button> */}
    <div className="flex flex-col md:flex-row justify-between mb-5 gap-5">
      <DashboardCard 
        title='Posts'
        count={100} 
        icon={<Newspaper className='text-slate-500' size={72}/> }
      />
      <DashboardCard 
        title='Categories'
        count={12} 
        icon={<Folder className='text-slate-500' size={72}/> }
      />
      <DashboardCard 
        title='Users'
        count={750} 
        icon={<User className='text-slate-500' size={72}/> }
      />
      <DashboardCard 
        title='Comment'
        count={5022} 
        icon={<MessageCircle className='text-slate-500' size={70}/> }
      />
    </div>
    <AnalyticsChart/>
    <PostsTable title="Latest Posts" limit={5}/>
    </>
  );
}
