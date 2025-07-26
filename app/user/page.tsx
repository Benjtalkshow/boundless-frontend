import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { PriceDisplay } from "@/components/PriceDisplay";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { BoundlessButton } from "@/components/buttons";
import { Coins, DatabaseIcon, History, Plus } from "lucide-react";
import Card from "@/components/card";
import RecentProjects from "@/components/overview/RecentProjects";
import { mockProjects } from "@/lib/mock";
import RecentContributions from "@/components/overview/ReecntContributions";
import GrantHistory from "@/components/overview/GrantHistory";

export default function UserPage() {
  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-medium leading-[120%] tracking-[-0.64px] text-white">
            Hello, Collins
          </h1>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card
            title="Pending Submissions"
            value="0"
            bottomText={
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-white/60" />
                <span className="text-white/60 text-sm">No recent submissions</span>
              </div>
            }
          />
          <Card
            title="Active Projects"
            value="0"
            bottomText={
              <div className="flex items-center gap-2">
                <span className="text-white/90">0</span>
                <span className="text-white/90 text-sm">Approved Submissions</span>
              </div>
            }
          />
          <Card
            title="Available Grants"
            value={<PriceDisplay price={0} className="!tracking-[-0.06px]" />}
            bottomText={
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-sm">6 grants available</span>
              </div>
            }
          />
          <Card
            title="Active Campaigns"
            value="10"
            bottomText={
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-white/60" />
                <PriceDisplay
                  price={0}
                  className="!text-xs !tracking-[-0.06px]"
                />
              </div>
            }
          />
        </div>

        {/* Main Content Grid */}
        <div className="space-y-8">
          {/* Recent Projects - Full Width */}
          <RecentProjects projects={mockProjects} />
          
          {/* Recent Contributions and Grant History - Side by Side on larger screens */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <RecentContributions projects={[]} />
            <GrantHistory projects={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
