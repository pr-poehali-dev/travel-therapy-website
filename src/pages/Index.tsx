import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold text-foreground">
            Teach Travel Therapy
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Community
            </a>
            <a href="#recommendations" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Recommendations
            </a>
            <a href="#mentorship" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Mentorship
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-6 border-l border-muted pl-6">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Music" size={18} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Users" size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to Teach Travel Therapy — we're Taylor & Andrew
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From the Blue Ridge Mountains to the Pacific Northwest, travel therapy is our 
                gateway to adventure — and now we're here to share it with you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3">
                Join the Circle Community
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Explore Mentorship
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Free to join • No recruiters • For PT/OT/SLP only
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/img/a0bc9c37-43e2-4f07-bb16-211bc2218f0b.jpg" 
              alt="Taylor and Andrew in the Blue Ridge Mountains" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            At Teach Travel Therapy, we're redefining what it means to be a travel therapist. 
            We know the challenges because we live them every day. Our mission: to give you the 
            tools, opportunities, and community you need to not just survive — but <strong>thrive</strong>. 
            From exclusive access to quality job opportunities and a supportive network, to weekly 
            Travel Therapy Talks, quarterly deep-dives, and personalized mentorship, we're here 
            to help you unlock your potential and build the lifestyle you've been dreaming of.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What You Get
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-secondary/30 border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Icon name="Users" size={48} className="mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Community</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Private discussions, bi-weekly live sessions, quarterly presentations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/30 border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Icon name="Briefcase" size={48} className="mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Job Board</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The only job board focused on quality over quantity.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/30 border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Icon name="GraduationCap" size={48} className="mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Mentorship</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From free quick calls to 1:1 sessions and negotiation support.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/30 border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Icon name="FileText" size={48} className="mx-auto text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Resources</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Guides, templates, and checklists for taxes, housing, and licensing.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3">
            Join the Circle Community
          </Button>
        </div>
      </section>

      {/* Why Us Story */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/558b0511-71c3-4971-9fc0-649ddafe9105.jpg" 
                alt="Taylor and Andrew working together" 
                className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Us
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                We're Taylor and Andrew, a husband-and-wife duo who've been living the travel 
                therapy lifestyle since 2022. From Virginia's mountains to the Sonoran Desert 
                and beyond, we've turned this career into our adventure — and now, we've built 
                a space where you can do the same.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Safe, supportive, and all about thriving — without the noise or recruiter pressure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 pt-4">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">personal consultations</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary">$2400+</div>
                  <div className="text-sm text-muted-foreground">average extra pay secured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mentorship Preview
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Free Options</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">5-minute exploratory call</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Bi-weekly drop-ins</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Free quarterly presentations</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Paid Options</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Star" size={20} className="text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">1:1 presentation (80–100 min)</div>
                  <div className="text-sm text-muted-foreground">$199</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Star" size={20} className="text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">30-min 1:1 call</div>
                  <div className="text-sm text-muted-foreground">$60</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Star" size={20} className="text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Contract negotiation support</div>
                  <div className="text-sm text-muted-foreground">$100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
          <p className="text-sm text-foreground text-center">
            We never want finances to be the reason you miss out — scholarships available, 
            email <a href="mailto:taylor@teachtraveltherapy.com" className="text-primary underline">
              taylor@teachtraveltherapy.com
            </a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground leading-relaxed">
                  "Taylor made me feel safe to ask any question and helped me sign my first travel contract."
                </p>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Courtney, PT</div>
                  <div className="text-muted-foreground">Indiana</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground leading-relaxed">
                  "Transparent and supportive — we're now signing our first outpatient pediatrics contract."
                </p>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Reilly, PT</div>
                  <div className="text-muted-foreground">New York</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground leading-relaxed">
                  "With Taylor's guidance, I secured $2400 more on my contract."
                </p>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Dan, PT</div>
                  <div className="text-muted-foreground">California</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              Read More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Ready to take the first step?
        </h2>
        
        <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 mb-6">
          Join the Circle Community
        </Button>
        
        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Icon name="Instagram" size={16} />
            Instagram
          </a>
          <span>•</span>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Icon name="Music" size={16} />
            TikTok
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-sm">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <span className="text-muted-foreground">•</span>
              <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
              <span className="text-muted-foreground">•</span>
              <a href="#recommendations" className="text-foreground hover:text-primary transition-colors">Recommendations</a>
              <span className="text-muted-foreground">•</span>
              <a href="#mentorship" className="text-foreground hover:text-primary transition-colors">Mentorship</a>
              <span className="text-muted-foreground">•</span>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <span className="text-muted-foreground">•</span>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} />
              <span className="font-medium">Taylor:</span>
              <a href="mailto:taylor@teachtraveltherapy.com" className="text-primary hover:text-accent underline">
                taylor@teachtraveltherapy.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} />
              <span className="font-medium">Andrew:</span>
              <a href="mailto:andrew@teachtraveltherapy.com" className="text-primary hover:text-accent underline">
                andrew@teachtraveltherapy.com
              </a>
            </div>
          </div>
          
          <div className="text-center text-xs text-muted-foreground border-t border-muted pt-8">
            <p className="mb-2">Community is for PT/OT/SLP only. Recruiters — thank you, but this space is just for therapists.</p>
            <p>&copy; 2024 Teach Travel Therapy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;