import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">
            Teach Travel Therapy
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#recommendations" className="text-foreground hover:text-primary transition-colors">
              Recommendations
            </a>
            <a href="#mentorship" className="text-foreground hover:text-primary transition-colors">
              Mentorship
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-6">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Music" size={20} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Users" size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Welcome to Teach Travel Therapy
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
          We are so happy you are here – Taylor & Andrew
        </p>
        
        {/* Navigation Links under Hero */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 text-sm md:text-base">
          <a href="#about" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
            About
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="#community" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
            Community
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="#recommendations" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
            Recommendations
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="#mentorship" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
            Mentorship
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
            Testimonials
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary">
            Contact
          </a>
        </div>

        {/* Main Text */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12">
            Join the{' '}
            <a href="#community" className="text-primary hover:text-accent underline">
              'Teach Travel Therapy' community on Circle
            </a>
            , explore the only{' '}
            <a href="#recommendations" className="text-primary hover:text-accent underline">
              job board focused on quality over quantity
            </a>
            , participate in{' '}
            <a href="#talks" className="text-primary hover:text-accent underline">
              weekly Travel Therapy Talks every Tuesday and Thursday
            </a>
            , sign up for{' '}
            <a href="#presentations" className="text-primary hover:text-accent underline">
              free quarterly presentations
            </a>
            , and receive{' '}
            <a href="#mentorship" className="text-primary hover:text-accent underline">
              ongoing mentorship
            </a>
            .
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-5xl mx-auto">
              At Teach Travel Therapy, we're redefining what it means to be a travel therapist. 
              Our mission is to equip you with the tools, opportunities, and community you need 
              to not just survive—but thrive—in your career. From exclusive access to top-tier 
              job opportunities and a supportive network of like-minded therapists, to weekly 
              travel therapy talks, quarterly deep-dive presentations, and personalized mentorship 
              every step of the way, we're here to help you unlock your full potential and help 
              you live the lifestyle you've been dreaming of.
            </p>
            
            <div className="mt-12">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-secondary/50 rounded-lg">
            <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
            <p className="text-muted-foreground">
              Connect with like-minded travel therapists in our supportive Circle community
            </p>
          </div>
          
          <div className="text-center p-6 bg-secondary/50 rounded-lg">
            <Icon name="Briefcase" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality Jobs</h3>
            <p className="text-muted-foreground">
              Access our curated job board focused on quality opportunities over quantity
            </p>
          </div>
          
          <div className="text-center p-6 bg-secondary/50 rounded-lg">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Weekly Talks</h3>
            <p className="text-muted-foreground">
              Join our Travel Therapy Talks every Tuesday and Thursday for insights and tips
            </p>
          </div>
          
          <div className="text-center p-6 bg-secondary/50 rounded-lg">
            <Icon name="GraduationCap" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Mentorship</h3>
            <p className="text-muted-foreground">
              Receive personalized guidance and mentorship throughout your career journey
            </p>
          </div>
          
          <div className="text-center p-6 bg-secondary/50 rounded-lg">
            <Icon name="Calendar" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Presentations</h3>
            <p className="text-muted-foreground">
              Attend our free quarterly deep-dive presentations on industry topics
            </p>
          </div>
          
          <div className="text-center p-6 bg-secondary/50 rounded-lg">
            <Icon name="Star" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
            <p className="text-muted-foreground">
              Tools and opportunities to help you unlock your full potential
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-sm md:text-base">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#community" className="text-foreground hover:text-primary transition-colors">
                Community
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#recommendations" className="text-foreground hover:text-primary transition-colors">
                Recommendations
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#mentorship" className="text-foreground hover:text-primary transition-colors">
                Mentorship
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-foreground">
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
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>&copy; 2024 Teach Travel Therapy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;