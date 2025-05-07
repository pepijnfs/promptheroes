"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

// Define our use cases for the slider
const useCases = [
  {
    id: 1,
    title: "Code Generation & Scaffolding",
    problem: "Repetitieve code en boilerplate setup vertraagt het starten van nieuwe features",
    solution: "AI genereert volledige components, classes en styling.",
    icon: <CodeBracketIcon className="w-6 h-6 text-ph-600" />,
    userPrompt: "Genereer een React data table component met sortering, filtering en pagination",
    aiResponse: "Ik genereer een volledig functionele DataTable component met alle gevraagde features en TypeScript types.",
    codeExample: `interface DataTableProps<T> {
  data: T[];
  columns: Column[];
  pageSize?: number;
}

const DataTable = <T extends Record<string, any>>({ 
  data,
  columns,
  pageSize = 10 
}: DataTableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<string>();
  const [filters, setFilters] = useState({});

  return (
  const filteredData = useMemo(() => 
    data.filter(item => 
      Object.entries(filters).every(([key, value]) =>
        item[key].toLowerCase().includes(value.toLowerCase())
      )
    ), [data, filters]);

  return (
    <div className="rounded-lg border shadow-sm">
      {/* Filters */}
      <div className="p-4 border-b">
        {columns.map(col => (
          <input
            key={col.key}
            placeholder={\`Filter \${col.label}...\`}
            onChange={e => setFilters(f => ({
              ...f,
              [col.key]: e.target.value
            }))}
          />
        ))}
      </div>

      {/* Table implementation... */}
    </div>
  );
};`
  },
  {
    id: 2,
    title: "Intelligent Debugging",
    problem: "Cryptische errors en moeilijk vindbare bugs kosten uren debug tijd",
    solution: "AI analyseert errors, legt ze uit in begrijpelijke taal en suggereert concrete fixes",
    icon: <CodeBracketIcon className="w-6 h-6 text-ph-600" />,
    userPrompt: "Debug deze error: TypeError: Cannot read property 'addresses' of undefined in CheckoutForm",
    aiResponse: "Dit is een veelvoorkomende null-pointer error. Laat me de oorzaak uitleggen en een robuuste oplossing voorstellen met optional chaining.",
    codeExample: `// Probleem: Onveilige data access
const CheckoutForm = ({ order }) => {
  // ❌ Kan crashen als order undefined is
  const shippingAddress = order.addresses.shipping;
  
  return <div>{shippingAddress.street}</div>;
};

// Oplossing: Veilige data access met fallbacks
const CheckoutForm = ({ order }) => {
  // ✓ Veilig met optional chaining & nullish coalescing
  const shippingAddress = order?.addresses?.shipping ?? {};
  
  // ✓ Defensive rendering
  if (!order?.addresses) {
    return <div>Loading order details...</div>;
  }

  return (
    <div>
      <p>{shippingAddress.street ?? 'No street address'}</p>
    </div>
  );
};`
  },
  {
    id: 3,
    title: "Automated Testing",
    problem: "Het schrijven van complete test suites kost veel ontwikkeltijd",
    solution: "AI genereert uitgebreide tests voor verschillende scenarios en edge cases",
    icon: <CodeBracketIcon className="w-6 h-6 text-ph-600" />,
    userPrompt: "Genereer unit en integration tests voor onze authentication service",
    aiResponse: "Ik maak een complete test suite die alle belangrijke scenarios dekt: login, registratie, wachtwoord reset, en error cases.",
    codeExample: `describe('AuthService', () => {
  let authService: AuthService;
  let mockUserRepo: MockUserRepository;

  beforeEach(() => {
    mockUserRepo = new MockUserRepository();
    authService = new AuthService(mockUserRepo);
  });

  describe('login', () => {
    it('returns JWT token for valid credentials', async () => {
      const result = await authService.login({
        email: 'test@example.com',
        password: 'valid123'
      });
      
      expect(result.token).toBeDefined();
      expect(result.user.email).toBe('test@example.com');
    });

    it('handles rate limiting', async () => {
      // Test rate limiting
      for (let i = 0; i < 5; i++) {
        await authService.login({ 
          email: 'test@example.com',
          password: 'wrong'
        });
      }

      await expect(
        authService.login({
          email: 'test@example.com',
          password: 'wrong'
        })
      ).rejects.toThrow('Too many attempts');
    });
  });
});`
  },
  {
    id: 4,
    title: "Code Refactoring & Optimization",
    problem: "Legacy code en performance issues vereisen veel handmatig refactoring werk",
    solution: "AI analyseert je code en stelt concrete verbeteringen voor met moderne best practices",
    icon: <CodeBracketIcon className="w-6 h-6 text-ph-600" />,
    userPrompt: "Refactor deze legacy React class component naar een moderne functional component met hooks",
    aiResponse: "Ik zal de component omzetten naar een functional component, hooks toevoegen voor state management, en performance optimalisaties toepassen.",
    codeExample: `// Legacy class component
class UserList extends React.Component {
  state = { users: [], loading: true };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    if (this.state.loading) return <Loading />;
    return <div>{this.state.users.map(...)}</div>;
  }
}

// ↓ Gerefactorde versie met moderne patterns

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Custom hook voor data fetching
  const { data, error } = useSWR('/api/users', fetcher);

  // Memoized user filtering
  const activeUsers = useMemo(() => 
    data?.filter(user => user.active),
    [data]
  );

  // Error boundary pattern
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <Loading />;

  return (
    <div>
      {activeUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};`
  },
  {
    id: 5,
    title: "Documentation Generation",
    problem: "Documentatie bijhouden kost tijd en wordt vaak overgeslagen",
    solution: "AI genereert en update documentatie automatisch tijdens het ontwikkelen",
    icon: <CodeBracketIcon className="w-6 h-6 text-ph-600" />,
    userPrompt: "Genereer JSDoc documentatie voor deze PaymentService class",
    aiResponse: "Ik genereer uitgebreide documentatie met type definitions, voorbeelden en edge cases.",
    codeExample: `/**
 * Handles all payment processing and transaction management
 * @class PaymentService
 * 
 * @example
 * const paymentService = new PaymentService(config);
 * await paymentService.processPayment({
 *   amount: 2999,
 *   currency: 'EUR',
 *   paymentMethod: 'ideal'
 * });
 */
class PaymentService {
  /**
   * Process a payment transaction
   * @async
   * @param {Object} params - Payment parameters
   * @param {number} params.amount - Amount in cents
   * @param {string} params.currency - ISO currency code
   * @param {string} params.paymentMethod - Payment method ID
   * @throws {PaymentError} When payment processing fails
   * @returns {Promise<Transaction>} Processed transaction
   */
  async processPayment({ amount, currency, paymentMethod }) {
    // Implementation...
  }
}`
  },
  {
    id: 6,
    title: "Natural Language to Code",
    problem: "Complex business requirements vertalen naar code is tijdrovend",
    solution: "Beschrijf wat je nodig hebt in natuurlijke taal en AI vertaalt het naar werkende code",
    icon: <CodeBracketIcon className="w-6 h-6 text-ph-600" />,
    userPrompt: "Maak een functie die een lijst van orders filtert op status, datum en bedrag, en sorteer ze op datum",
    aiResponse: "Ik genereer een type-safe filtering functie met alle gevraagde criteria en goede error handling.",
    codeExample: `interface Order {
  id: string;
  status: 'pending' | 'processing' | 'completed';
  date: Date;
  amount: number;
}

const filterAndSortOrders = (
  orders: Order[],
  filters: {
    status?: Order['status'][];
    dateRange?: { start: Date; end: Date };
    minAmount?: number;
  }
) => {
  return orders
    .filter(order => {
      const matchesStatus = !filters.status?.length || 
        filters.status.includes(order.status);
        
      const matchesDateRange = !filters.dateRange ||
        (order.date >= filters.dateRange.start && 
         order.date <= filters.dateRange.end);
         
      const matchesAmount = !filters.minAmount || 
        order.amount >= filters.minAmount;

      return matchesStatus && matchesDateRange && matchesAmount;
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};`
  },
  {
    id: 7,
    title: "Learning & Knowledge Discovery",
    problem: "Nieuwe codebases en frameworks leren kost veel tijd",
    solution: "AI legt code uit, geeft voorbeelden en helpt bij het leren van nieuwe technologieën",
    icon: <CodeBracketIcon className="w-6 h-6 text-ph-600" />,
    userPrompt: "Leg uit hoe React Server Components werken en wanneer je ze moet gebruiken",
    aiResponse: "Ik zal uitleggen hoe RSC werken met een praktisch voorbeeld van client vs server components.",
    codeExample: `// Server Component (default in Next.js 13+)
// Voordelen: 
// - Geen JS naar client
// - Direct DB access
// - Geheimen veilig
async function ProductPage({ id }) {
  // Direct DB query - geen API nodig
  const product = await db.products.findById(id);
  
  return (
    <article>
      <h1>{product.name}</h1>
      <ProductPrice product={product} />
      <AddToCartButton id={id} /> {/* Client Component */}
    </article>
  );
}

// Client Component
'use client';

function AddToCartButton({ id }) {
  // Interactieve features
  const [loading, setLoading] = useState(false);
  
  return (
    <button onClick={() => addToCart(id)}>
      Add to Cart
    </button>
  );
}`
  }
];

const ModeBadge = () => {
  const [mounted, setMounted] = useState(false);
  const [modeIndex, setModeIndex] = useState(0);
  
  const modes = [{ name: "Agent" }, { name: "Ask" }, { name: "Manual" }];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    setModeIndex((prevIndex) => (prevIndex + 1) % modes.length);
  };
  
  const currentMode = modes[modeIndex];

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-2 bg-ph-800 px-4 py-2 rounded-full">
        <span className="w-3 h-3 bg-ph-600 rounded-full flex-shrink-0"></span>
        <span className="text-sm font-medium text-white block">Agent</span>
      </div>
    );
  }

  return (
    <motion.div 
      className="inline-flex items-center gap-2 bg-ph-800 px-4 py-2 rounded-full cursor-pointer transition-all duration-150 hover:bg-ph-700 overflow-hidden"
      onMouseEnter={handleMouseEnter}
    >
      <span className="w-3 h-3 bg-ph-600 rounded-full animate-pulse flex-shrink-0"></span>
      <div className="relative">
        <motion.span 
          key={currentMode.name}
          className="text-sm font-medium text-white block"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.3,
          }}
        >
          {currentMode.name}
        </motion.span>
      </div>
    </motion.div>
  );
};

const ProblemSolution = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedCodeText, setDisplayedCodeText] = useState("");

  const totalSlides = useCases.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setDisplayedCodeText("");
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setDisplayedCodeText("");
  };

  // Type out the code
  useEffect(() => {
    if (!mounted) return;
    
    const codeText = useCases[currentSlide].codeExample;
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= codeText.length) {
        setDisplayedCodeText(codeText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 15);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentSlide, mounted]);

  const currentUseCase = useCases[currentSlide];

  // Prevent hydration issues by rendering a simple initial state
  if (!mounted) {
    return (
      <section className="py-20 relative overflow-hidden" id="about">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ph-900"></div>
        </div>
        <div className="w-section-xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Initial loading state */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="relative">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
      <section className="py-20 relative overflow-hidden" id="about">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-ph-900"></div>
        </div>
        
        <div className="w-section-xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column - Use Case Content */}
            <motion.div 
              className="lg:w-1/2 flex-shrink"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                Ship producten
                <span className="text-gradient-blue-gold"> sneller en goedkoper</span>{" "}
                met AI-assisted programming
              </h2>
              <p className="text-ph-300 mb-10">
                Verhoog de productiviteit van je development team zonder extra mensen
                aan te nemen.
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-ph-800 text-white hover:bg-ph-700 transition-colors disabled:opacity-50"
                  disabled={totalSlides <= 1}
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <div className="text-white text-sm">
                  {currentSlide + 1} / {totalSlides}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-ph-800 text-white hover:bg-ph-700 transition-colors disabled:opacity-50"
                  disabled={totalSlides <= 1}
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Use Case Content */}
              <AnimatePresence mode="wait">
                  <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2.5 rounded-lg bg-ph-800/50">
                      {currentUseCase.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {currentUseCase.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-ph-300 mb-2">
                        Het probleem:
                      </h4>
                      <p className="text-ph-300">{currentUseCase.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-ph-300 mb-2">
                        De oplossing:
                      </h4>
                      <p className="text-ph-300">{currentUseCase.solution}</p>
                    </div>
                    </div>
                  </motion.div>
              </AnimatePresence>
            </motion.div>
            
            {/* Right Column - Code Example */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-full">
                {/* Glow effect behind the illustration */}
                <div className="absolute inset-0 bg-ph-600/20 rounded-xl blur-xl transform rotate-3"></div>
                
                {/* Main illustration container */}
                <div className="relative bg-gradient-to-br from-ph-900 to-ph-950 p-6 rounded-xl border border-ph-800/30 min-h-[475px] lg:min-h-[530px]">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-ph-600/10 rounded-full blur-xl"></div>
                  
                  {/* Code Interface Mockup */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        <ModeBadge />
                        <div className="inline-flex items-center gap-2 bg-ph-800 px-4 py-2 rounded-full whitespace-nowrap">
                          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                          <span className="text-sm font-medium text-ph-300">
                            Claude 3.7 Sonnet
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-ph-800/50 px-4 py-2 rounded-full whitespace-nowrap">
                          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                          <span className="text-sm font-medium text-ph-300">
                            Gemini 2.5 Pro
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 h-[415px] overflow-hidden relative">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ph-800/50 flex items-center justify-center text-white text-sm font-bold">
                          U
                        </div>
                        <div className="bg-ph-800/70 px-4 py-3 rounded-lg text-sm text-ph-300">
                          {currentUseCase.userPrompt}
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ph-600/30 flex items-center justify-center text-white text-sm font-bold">
                          AI
                        </div>
                        <div className="bg-ph-800/70 px-4 py-3 rounded-lg text-sm text-ph-300">
                          {currentUseCase.aiResponse}
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ph-600/30 flex items-center justify-center text-white text-sm font-bold">
                          AI
                        </div>
                        <div className="bg-ph-800/70 px-4 py-3 rounded-lg text-sm text-ph-300 font-mono relative overflow-hidden w-full">
                          <pre className="whitespace-pre-wrap">
                            {displayedCodeText}
                          </pre>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ph-900 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemSolution;
