```
import React from 'react';
import { 
  Signal, BatteryCharging, Wifi, Box, Tractor, 
  Zap, Globe, Layers, LayoutDashboard, ChevronDown, ChevronUp,
  Cpu, Activity, CheckCircle2
} from 'lucide-react';


                            {/* Center Device */}
                            <div className="relative z-10 w-48 h-48 bg-brand-dark border border-brand-accent rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-brand-accent/20">
                                <Signal className="w-16 h-16 text-brand-accent mb-2" />
                                <div className="flex gap-1 mt-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
                                </div>
                                <span className="text-xs text-brand-text-secondary mt-2 font-mono">SIGNAL_LOCKED</span>
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute w-72 h-72 border border-brand-text-secondary/20 rounded-full animate-[spin_20s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark p-2 rounded-full border border-brand-border">
                                    <BatteryCharging className="w-6 h-6 text-brand-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. LPWAN Technology Overview */}
            <section className="py-24 bg-brand-surface border-y border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-brand-text-primary">Next-Generation LPWAN: <br /><span className="text-brand-primary">Low Power, High Efficiency</span></h2>
                        <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
                            Our LPWAN solutions, powered by both LTE-M (Cat-M1) and NB-IoT, are purpose-built for the demands of long-life, high-density IoT deployments. These standards maximize battery life and ensure deep indoor signal penetration, making them the ultimate choice for stationary and mobile assets transmitting small amounts of data.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                                <span className="text-brand-text-primary">Optimized for small data packets and infrequent transmission.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                                <span className="text-brand-text-primary">Supports massive connection density per cell tower.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Visual Comparison Element */}
                    <div className="bg-brand-dark rounded-xl border border-brand-border p-8 shadow-xl">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <div className="col-span-1 bg-brand-surface/50 rounded-lg p-6 flex flex-col items-center text-center border border-brand-border hover:border-brand-primary transition-colors">
                                <Activity className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="font-bold text-white mb-2">LTE-M</h3>
                                <div className="text-xs text-brand-text-secondary space-y-2">
                                    <p>Higher Data Rates</p>
                                    <p>Voice Support (VoLTE)</p>
                                    <p>Full Mobility</p>
                                </div>
                            </div>
                            <div className="col-span-1 bg-brand-surface/50 rounded-lg p-6 flex flex-col items-center text-center border border-brand-border hover:border-green-400 transition-colors">
                                <Signal className="w-10 h-10 text-green-400 mb-4" />
                                <h3 className="font-bold text-white mb-2">NB-IoT</h3>
                                <div className="text-xs text-brand-text-secondary space-y-2">
                                    <p>Max Penetration</p>
                                    <p>Max Battery Life</p>
                                    <p>Stationary Assets</p>
                                </div>
                            </div>
                            <div className="col-span-2 mt-4 text-center">
                                <div className="h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full w-full mb-2"></div>
                                <p className="text-xs text-brand-text-secondary uppercase tracking-widest">Unified Simtope Platform</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Trusted Multi-Carrier Coverage */}
            <section className="py-24 bg-brand-dark">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Trusted Multi-Carrier Coverage for LPWAN</h2>
                    <p className="text-brand-text-secondary text-lg mb-12">
                        Eliminate coverage gaps and ensure redundancy with direct access to leading North American networks. Our SIMs connect instantly to the strongest available signal across our trusted partners:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-brand-surface p-4 rounded-xl border border-brand-border flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Verizon_2015_logo.svg/1200px-Verizon_2015_logo.svg.png" alt="Verizon" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all mb-2" />
                            <span className="text-xs text-brand-text-secondary font-bold">Verizon</span>
                        </div>
                        <div className="bg-brand-surface p-4 rounded-xl border border-brand-border flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/AT%26T_logo_2016.svg/1200px-AT%26T_logo_2016.svg.png" alt="AT&T" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all mb-2" />
                            <span className="text-xs text-brand-text-secondary font-bold">AT&T</span>
                        </div>
                        <div className="bg-brand-surface p-4 rounded-xl border border-brand-border flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rogers_Communications_logo.svg/2560px-Rogers_Communications_logo.svg.png" alt="Rogers" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all mb-2" />
                            <span className="text-xs text-brand-text-secondary font-bold">Rogers</span>
                        </div>
                        <div className="bg-brand-surface p-4 rounded-xl border border-brand-border flex flex-col items-center justify-center hover:bg-white/5 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Telus-logo.svg/2560px-Telus-logo.svg.png" alt="Telus" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all mb-2" />
                            <span className="text-xs text-brand-text-secondary font-bold">Telus</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. LPWAN Data Plans & Management */}
            <section className="py-24 bg-brand-surface border-y border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Simplify Connectivity with Simtope's LPWAN Data Plans</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary border border-brand-border">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Global Connectivity</h3>
                            </div>
                            <p className="text-brand-text-secondary text-sm leading-relaxed">
                                Connect your devices seamlessly across multiple countries with unified plans, simplifying deployment regardless of location.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary border border-brand-border">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Flexible Plans</h3>
                            </div>
                            <p className="text-brand-text-secondary text-sm leading-relaxed">
                                You can quickly scale your IoT deployment by adding new plans from different carriers and managing all your connections within a single platform.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary border border-brand-border">
                                    <LayoutDashboard className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Multi-Carrier Platform</h3>
                            </div>
                            <p className="text-brand-text-secondary text-sm leading-relaxed">
                                Access a platform that integrates data from various MNOs to give you visibility across your entire deployment of devices, helping you optimize costs and make better-informed business decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Key Benefits */}
            <section className="py-24 bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Why Choose LPWAN for Your Next Deployment?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-400/10 transition-colors">
                                <BatteryCharging className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Extended Battery Life</h3>
                            <p className="text-sm text-brand-text-secondary">
                                Achieve up to 10+ years of operation from a single battery due to reduced power consumption during idle and transmission (PSM and eDRX).
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-400/10 transition-colors">
                                <Wifi className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Deep Indoor Penetration</h3>
                            <p className="text-sm text-brand-text-secondary">
                                LPWAN signals can reach devices located deep inside buildings or underground (e.g., utility meters) where standard cellular struggles.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-400/10 transition-colors">
                                <Signal className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Massive Device Density</h3>
                            <p className="text-sm text-brand-text-secondary">
                                Support the connection of millions of devices per square kilometer, enabling true hyper-scale IoT deployments.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400/10 transition-colors">
                                <Cpu className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Low Module Cost</h3>
                            <p className="text-sm text-brand-text-secondary">
                                Lower complexity results in less expensive cellular hardware modules, driving down the overall bill of materials for your product.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Explore Applications */}
            <section className="py-24 bg-brand-surface border-t border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Explore LPWAN Applications</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* App 1 */}
                        <div className="group">
                            <div className="aspect-video bg-brand-dark rounded-xl overflow-hidden mb-6 border border-brand-border relative">
                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
                                    alt="Smart Logistics"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80"></div>
                                <Box className="absolute bottom-4 left-4 text-white w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text-primary mb-2">Smart Logistics & Asset Tracking</h3>
                            <p className="text-sm text-brand-text-secondary leading-relaxed">
                                Use LPWAN’s superior battery life to track non-powered assets like shipping containers, pallets, and equipment over long periods without frequent charging.
                            </p>
                        </div>

                        {/* App 2 */}
                        <div className="group">
                            <div className="aspect-video bg-brand-dark rounded-xl overflow-hidden mb-6 border border-brand-border relative">
                                <img
                                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000"
                                    alt="Smart Agriculture"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80"></div>
                                <Tractor className="absolute bottom-4 left-4 text-white w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text-primary mb-2">Smart Agriculture</h3>
                            <p className="text-sm text-brand-text-secondary leading-relaxed">
                                Monitor soil conditions, weather patterns, and livestock location across vast rural landscapes, leveraging the deep penetration of LPWAN technology.
                            </p>
                        </div>

                        {/* App 3 */}
                        <div className="group">
                            <div className="aspect-video bg-brand-dark rounded-xl overflow-hidden mb-6 border border-brand-border relative">
                                <img
                                    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1000"
                                    alt="Smart Utilities"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80"></div>
                                <Zap className="absolute bottom-4 left-4 text-white w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text-primary mb-2">Smart Utilities & Metering</h3>
                            <p className="text-sm text-brand-text-secondary leading-relaxed">
                                Enable highly efficient, cost-effective data collection from gas, water, and electricity meters, supporting municipal infrastructure management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQs */}
            <section className="py-24 bg-brand-dark">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        <FAQItem
                            question="What is the difference between LTE-M and NB-IoT?"
                            answer="LTE-M (Cat-M1) supports higher data rates and mobility (like in vehicles), while NB-IoT is optimized for maximum signal penetration, extremely long battery life, and stationary devices with very low data needs."
                        />
                        <FAQItem
                            question="Can I use one SIM for both LTE-M and NB-IoT?"
                            answer="Yes, our advanced SIMs are designed to provision the appropriate LPWAN technology based on network availability and device capability, ensuring future-proofing and flexibility."
                        />
                        <FAQItem
                            question="How does LPWAN save on power consumption?"
                            answer="LPWAN employs features like Power Saving Mode (PSM) and Extended Discontinuous Reception (eDRX) that allow the device to sleep for long periods, dramatically reducing power draw compared to traditional cellular."
                        />
                    </div>
                </div>
            </section>

            {/* 8. Call to Action */}
            <section className="py-24 bg-gradient-to-br from-brand-primary to-blue-900 text-white border-t border-brand-border">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">Start Your LPWAN Deployment.</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Get ultra-efficient connectivity designed for scale, durability, and battery life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
                            View Data Plans
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                            Talk to an LPWAN Expert
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-brand-border rounded-lg bg-brand-surface overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-brand-text-primary hover:bg-white/5 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp className="w-5 h-5 text-brand-primary" /> : <ChevronDown className="w-5 h-5 text-brand-text-secondary" />}
            </button>
            <div
                className={`overflow - hidden transition - all duration - 300 ease -in -out ${ isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' } `}
            >
                <div className="p-5 pt-0 text-brand-text-secondary text-sm border-t border-brand-border/30">
                    <div className="pt-4 leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};