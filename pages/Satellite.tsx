import React, { useState } from 'react';
import {
    Satellite, Smartphone, Signal,
    Cpu, Zap, ChevronDown, ChevronUp, ArrowRight,
    Tractor, Mountain, Truck, Sprout, CloudRain
} from 'lucide-react';

export const SatellitePage: React.FC = () => {
                                <div className="w-80 h-80 border border-brand-primary/20 rounded-full animate-[spin_30s_linear_infinite_reverse] absolute"></div>
                                <Satellite className="w-24 h-24 text-brand-text-primary absolute top-0 right-10 animate-float-slow" />
                                <Smartphone className="w-32 h-32 text-brand-primary absolute z-10" />
                                <Signal className="w-12 h-12 text-brand-accent absolute top-10 left-10 animate-pulse-slow" />
                            </div >
                        </div >
                    </div >
                </div >
            </section >

    {/* 2. Value Propositions */ }
    < section className = "py-20 bg-brand-surface" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-text-primary mb-16">
                Maximize device uptime and minimize satellite IoT connectivity costs
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mb-6 border border-brand-border">
                        <Signal className="w-8 h-8 text-brand-primary" />
                    </div>
                    <p className="text-brand-text-secondary leading-relaxed">
                        Converged cellular and satellite connectivity on a single eSIM for uninterrupted IoT connectivity.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mb-6 border border-brand-border">
                        <Zap className="w-8 h-8 text-brand-primary" />
                    </div>
                    <p className="text-brand-text-secondary leading-relaxed">
                        Managed through a single provider, service, and platform, across cellular and satellite networks for lowered operational costs.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mb-6 border border-brand-border">
                        <Cpu className="w-8 h-8 text-brand-primary" />
                    </div>
                    <p className="text-brand-text-secondary leading-relaxed">
                        Compatible with 3GPP Rel 17 compliant cellular and satellite hybrid radio modules to enable reduced hardware costs.
                    </p>
                </div>
            </div>
        </div>
            </section >

    {/* 3. Datasheet CTA */ }
    < section className = "py-20 bg-gradient-to-r from-brand-primary/90 to-blue-900 relative overflow-hidden" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Download the Simtope Satellite datasheet</h2>
                <p className="text-blue-100 mb-8 max-w-md">
                    Explore the full capabilities of Simtope Satellite in our concise product guide. Perfect for quick reference and sharing with other key decision makers.
                </p>
                <Button variant="secondary">Get the datasheet</Button>
            </div>
            <div className="hidden md:block">
                {/* Abstract Document Visualization */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto">
                    <div className="h-4 w-1/3 bg-white/30 rounded mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-white/20 rounded"></div>
                        <div className="h-2 w-full bg-white/20 rounded"></div>
                        <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="h-20 bg-white/10 rounded"></div>
                        <div className="h-20 bg-white/10 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
            </section >

    {/* 4. Use Cases */ }
    < section className = "py-24 bg-brand-dark" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1513828742140-5565732528c6?auto=format&fit=crop&q=80&w=1000"
                        alt="Satellite View of Earth Logistics"
                        className="rounded-2xl opacity-80 shadow-2xl border border-brand-border"
                    />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-8">
                        Simtope Satellite opens up new markets and use cases
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <Truck className="w-8 h-8 text-brand-primary shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-brand-text-primary">Asset tracking and monitoring</h3>
                                <p className="text-sm text-brand-text-secondary mt-1">
                                    Assets such as vehicles and heavy equipment often move in and out of the boundaries of traditional cellular networks requiring satellite to maintain uninterrupted connectivity.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Mountain className="w-8 h-8 text-brand-primary shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-brand-text-primary">Remote operations management</h3>
                                <p className="text-sm text-brand-text-secondary mt-1">
                                    In industries where facilities are in remote areas, satellite connectivity can play a role in enabling continuous, real-time monitoring and adjustment. Mining and Oil & Gas are prime examples.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid of smaller use cases */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-brand-surface p-6 rounded-xl border border-brand-border">
                    <Tractor className="w-8 h-8 text-brand-accent mb-4" />
                    <h3 className="text-lg font-bold text-brand-text-primary mb-2">Agriculture</h3>
                    <p className="text-sm text-brand-text-secondary">Converged cellular and satellite powers continuous connectivity in remote and rural farming areas, ensuring crops, machinery, and workers have a steady stream of data.</p>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-brand-border">
                    <CloudRain className="w-8 h-8 text-brand-accent mb-4" />
                    <h3 className="text-lg font-bold text-brand-text-primary mb-2">Environmental monitoring</h3>
                    <p className="text-sm text-brand-text-secondary">Vital for monitoring climate and pollution in predicting weather patterns. Utility companies often monitor weather patterns to predict their impact on the power grid.</p>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-brand-border">
                    <Sprout className="w-8 h-8 text-brand-accent mb-4" />
                    <h3 className="text-lg font-bold text-brand-text-primary mb-2">Livestock tracking</h3>
                    <p className="text-sm text-brand-text-secondary">Satellite connectivity is increasingly employed in livestock and wildlife conservation for tracking animal movements and health in remote areas.</p>
                </div>
            </div>
        </div>
            </section >

    {/* 5. Random Testimonial */ }
    < section className = "py-20 bg-brand-primary/5 border-y border-brand-border" >
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-5xl text-brand-primary font-serif mb-6">“</div>
            <p className="text-2xl text-brand-text-primary font-light italic mb-8">
                With Simtope Satellite, we eliminated our coverage blind spots completely. The seamless transition between cellular towers and satellite feed means our hazardous material shipments are never offline, no matter how remote the route.
            </p>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
                </div>
                <div className="text-left">
                    <div className="text-brand-text-primary font-bold">Marcus Thorne</div>
                    <div className="text-brand-text-secondary text-sm">VP of Operations, GlobalFreight Logistics</div>
                </div>
            </div>
        </div>
            </section >

    {/* 6. Connectivity Explanation */ }
    < section className = "py-24 bg-brand-dark" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                {/* Visual Representation */}
                <div className="relative rounded-2xl overflow-hidden border border-brand-border shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" alt="Global Network" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Seamless, cellular and satellite IoT connectivity</h2>
                <p className="text-brand-text-secondary mb-6 leading-relaxed">
                    Simtope Satellite combines the multi-network cellular coverage of the Simtope IoT SuperNetwork with our Satellite Partner's NTN satellite IoT network to enable converged cellular and satellite coverage.
                </p>
                <p className="text-brand-text-primary font-semibold mb-8">
                    Simtope Satellite offers converged coverage in the USA, UK, EU, Switzerland, Japan, Australia and New Zealand.
                </p>
                <Button>Get Connected</Button>
            </div>
        </div>
            </section >

    {/* 7. How it works */ }
    < section className = "py-24 bg-brand-surface" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-brand-text-primary mb-8">How does Simtope Satellite work?</h2>
                <p className="text-brand-text-secondary mb-8">Easy setup and management.</p>

                <div className="space-y-6">
                    {[
                        "Insert the Simtope satellite IoT eSIM into your hybrid cellular and NTN gateway",
                        "Configure your devices and/or applications for cellular and satellite switching",
                        "Manage all cellular and satellite connectivity within the Simtope connectivity management portal, or integrate into your own systems via API"
                    ].map((step, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center font-bold text-brand-primary shrink-0">
                                {i + 1}
                            </div>
                            <p className="text-brand-text-primary pt-2">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Industrial Gateway" className="rounded-2xl shadow-xl border border-brand-border grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
        </div>
            </section >

    {/* 8. Tech Specs */ }
    < section className = "py-24 bg-brand-dark/50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Simtope Satellite technical specifications</h2>
            <p className="text-brand-text-secondary mb-12 max-w-3xl mx-auto">Converged cellular and satellite IoT connectivity complies with 5G NTN 3GPP Release 17 compliance for NB-IoT over NTN connectivity with sleep mode support.</p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-brand-surface p-8 rounded-xl border border-brand-border">
                    <Signal className="w-8 h-8 text-brand-text-primary mb-4" />
                    <h4 className="font-bold text-brand-text-primary mb-2">Radio frequencies</h4>
                    <p className="text-sm text-brand-text-secondary">Satellite bands 255, 256 and band 23. Min. SINR ≥ -10 dB, Min. RSRP ≥ -128 dBm</p>
                </div>
                <div className="bg-brand-surface p-8 rounded-xl border border-brand-border">
                    <ArrowRight className="w-8 h-8 text-brand-text-primary mb-4" />
                    <h4 className="font-bold text-brand-text-primary mb-2">Transport layer</h4>
                    <p className="text-sm text-brand-text-secondary">Low-bandwidth, message-based IPv4 data transport via UDP</p>
                </div>
                <div className="bg-brand-surface p-8 rounded-xl border border-brand-border">
                    <Zap className="w-8 h-8 text-brand-text-primary mb-4" />
                    <h4 className="font-bold text-brand-text-primary mb-2">Throughput and latency</h4>
                    <p className="text-sm text-brand-text-secondary">Up to 5.12kBps in UL/DL for satellite communication with maintained latency of 541.46ms</p>
                </div>
            </div>
        </div>
            </section >

    {/* 9. Module Requirements Table */ }
    < section className = "py-20 bg-white text-slate-900" >
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Simtope Satellite compatible radio module requirements</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-4 text-left font-bold border-b border-slate-200" colSpan={2}>Required Specifications</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        <tr>
                            <td className="p-4 font-medium w-1/3">Frequency bands</td>
                            <td className="p-4 text-slate-600">Cellular RAN: LTE and 2G bands; Satellite RAN: B255, B256, B23.</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">NTN / NB-IoT / LTE-M</td>
                            <td className="p-4 text-slate-600">Dual Mode LTE Cat-M1/NB2 (Release 14); 5G NB-IoT over NTN (Release 17)</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">2G/EDGE</td>
                            <td className="p-4 text-slate-600">Enhanced GPRS</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">Power saving</td>
                            <td className="p-4 text-slate-600">PSM, eDRX</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">GNSS</td>
                            <td className="p-4 text-slate-600">GPS</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">Antenna Gain</td>
                            <td className="p-4 text-slate-600">3 to 5 dBi</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            </section >

    {/* 10. Partner Section (Shortened) */ }
    < section className = "py-24 bg-brand-dark text-center border-y border-brand-border" >
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Simtope partners with market leading, affordable hardware providers</h2>
            <p className="text-brand-text-secondary leading-relaxed">
                Simtope Satellite is compatible with converged hardware modules from top manufacturers to ensure reliability with standard form factors suitable for a variety of device sizes and designs.
            </p>
        </div>
            </section >

    {/* 11. Data Plans */ }
    < section className = "py-24 bg-brand-surface" >
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Available data plans</h2>
            <p className="text-brand-text-secondary mb-16">Which is the right plan for your IoT use case?</p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                    { name: 'Simtope Sat 10', data: '10MB', desc: 'cellular data per SIM per month' },
                    { name: 'Simtope Sat 30', data: '30MB', desc: 'cellular data per SIM per month' },
                    { name: 'Simtope Sat 60', data: '60MB', desc: 'cellular data per SIM per month' },
                ].map((plan) => (
                    <div key={plan.name} className="bg-brand-surface border border-brand-border rounded-xl p-8 hover:border-brand-primary transition-colors shadow-lg">
                        <h3 className="text-xl font-bold text-brand-text-primary mb-6">{plan.name}</h3>
                        <div className="text-sm text-brand-text-secondary py-4 border-y border-brand-border mb-4">
                            <span className="font-bold text-brand-text-primary">{plan.data}</span> {plan.desc}
                        </div>
                        <p className="text-xs text-brand-text-secondary">
                            10 satellite messages per SIM per month<br />
                            Data and satellite message pooling across SIMs
                        </p>
                    </div>
                ))}
            </div>
        </div>
            </section >

    {/* 12. Lead Gen Form */ }
    < section className = "py-24 bg-brand-dark relative overflow-hidden" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 items-center relative z-10">
            <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-brand-text-primary mb-6">Want to know more about IoT Simtope Satellite?</h2>
                <p className="text-brand-text-secondary text-lg">
                    Let's talk about how Simtope Satellite can help you grow your IoT business into new markets and use cases. Fill out the form and we'll be in touch.
                </p>
            </div>
            <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-2xl">
                <form className="space-y-4 text-slate-900">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name*" className="w-full border border-slate-300 rounded p-3 text-sm" />
                        <input type="text" placeholder="Last Name*" className="w-full border border-slate-300 rounded p-3 text-sm" />
                    </div>
                    <input type="email" placeholder="Business Email*" className="w-full border border-slate-300 rounded p-3 text-sm" />
                    <select className="w-full border border-slate-300 rounded p-3 text-sm text-slate-500">
                        <option>Country*</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>UK</option>
                    </select>
                    <div className="grid grid-cols-3 gap-4 items-center border border-slate-300 rounded p-3">
                        <span className="text-sm text-slate-500 col-span-1 border-r border-slate-300">Canada</span>
                        <input type="tel" placeholder="+1" className="col-span-2 outline-none text-sm" />
                    </div>
                    <select className="w-full border border-slate-300 rounded p-3 text-sm text-slate-500">
                        <option>Est. number of SIMs in the next 12 months*</option>
                        <option>1-100</option>
                        <option>100-1000</option>
                        <option>1000+</option>
                    </select>
                    <textarea placeholder="How did you hear about us?*" className="w-full border border-slate-300 rounded p-3 text-sm" rows={2}></textarea>
                    <Button className="w-full justify-center">Submit</Button>
                </form>
            </div>
        </div>
            </section >

    {/* 13. FAQ */ }
    < section className = "py-24 bg-brand-surface" >
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-text-primary text-center mb-12">Simtope Satellite FAQ</h2>
            <div className="space-y-2">
                <FAQItem question="In which countries and to which networks can I connect my IoT devices with SatPlus?" answer="Simtope Satellite offers converged coverage in the USA, Canada, UK, the EU." />
                <FAQItem question="Do I need two SIMs: one for satellite and one for cellular?" answer="No. Simtope Satellite uses a single eSIM that holds both cellular and satellite credentials, allowing seamlessly switching between networks." />
                <FAQItem question="Can I use my existing Simtope SIM for Simtope Satellite?" answer="Yes, if your device hardware supports the required satellite bands, your existing Simtope SIM profile can be updated over-the-air to support satellite connectivity." />
                <FAQItem question="Do I need two modems: one for satellite and one for cellular?" answer="No. You need a 3GPP Release 17 compliant module that supports NTN (Non-Terrestrial Networks). This single module handles both radio types." />
                <FAQItem question="Where can I find more detailed information on hardware compatibility requirements?" answer="Please download our datasheet or contact our engineering team for a full list of certified modules." />
                <FAQItem question="Can I manage both my cellular and satellite connectivity in the same portal?" answer="Absolutely. The Simtope CMP provides a unified view of all your devices, regardless of which network they are currently using." />
            </div>
        </div>
            </section >
        </div >
    );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-brand-border rounded-lg bg-brand-dark overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-brand-text-primary hover:bg-brand-surface transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-brand-text-secondary text-sm border-t border-brand-border/50">
                    {answer}
                </div>
            )}
        </div>
    );
}