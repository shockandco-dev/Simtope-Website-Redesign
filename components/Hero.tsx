

import { ChevronRight, Globe, Server } from 'lucide-react';

interface HeroProps {
  onConnect?: () => void;
}

export const Hero = ({ onConnect }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-brand-dark to-brand-dark -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent -z-10 blur-3xl" />
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 relative z-10 order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-brand-text-primary leading-[1.1]">
              THE Canadian source for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary">
                IoT Connectivity
              </span>
            </h1>

            <p className="text-lg text-brand-text-secondary max-w-xl leading-relaxed">
              We engineer the connectivity infrastructure that powers the future.
              From soldered MFF2 chips to satellite failover systems, Simtope delivers
              unbreakable networks for mission-critical enterprise applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onConnect}
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary bg-brand-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30 h-14 px-8 text-lg group"
              >
                Explore Solutions
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-8 border-t border-brand-border flex items-center gap-8 text-brand-text-secondary text-sm font-medium">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-primary" />
                <span>190+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-brand-primary" />
                <span>Tier-1 Infrastructure</span>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center lg:perspective-[2000px] order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
            <img
              src="https://cdn.shopify.com/s/files/1/0869/1223/7849/files/hero-image.png?v=1764880978"
              alt="eSIM, Nano SIM, and Satellite Connectivity Stack"
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl animate-float-slow hover:scale-105 transition-transform duration-700"
            />

          </div>

        </div>
      </div>
    </section>
  );
};