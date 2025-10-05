import { Search, Sprout, Users, Shield, BookOpen, Building2, Wheat, Menu, Bell, Languages, MessageCircle, FileText, GraduationCap, Phone, Mail, MapPin, Clock, Star, Mic, Bot, Settings, HelpCircle, User, X, Volume2, TextCursorInput, Wifi, WifiOff, Database, Info, ToggleLeft, ToggleRight, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "./components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./components/ui/dialog";
import { Badge } from "./components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [activeServiceDialog, setActiveServiceDialog] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationTab, setSelectedLocationTab] = useState("");

  const translations = {
    en: {
      brandName: "KRISHI SANKALP",
      tagline: "AI-Driven Crop Advisory",
      searchPlaceholder: "Search for services, schemes, or information...",
      tabs: {
        home: "Home",
        cropSuggestion: "Crop Suggestion",
        govSchemes: "Government Schemes"
      },
      quickServices: "Quick Services",
      menuItems: {
        settings: "Settings",
        aiChatbot: "AI Chatbot",
        faq: "FAQ",
        userAccount: "User Account"
      },
      chatbot: {
        title: "AI Assistant",
        placeholder: "Ask me anything about farming...",
        send: "Send"
      },
      profile: {
        title: "User Profile",
        name: "Farmer Name",
        phone: "Phone Number",
        location: "Location",
        crops: "Crops Grown",
        edit: "Edit Profile"
      },
      settings: {
        title: "App Settings",
        language: "Language Preference",
        notifications: "Notifications",
        voiceInput: "Voice Input",
        textSize: "Text Size",
        offlineMode: "Offline Mode",
        dataUsage: "Data Usage",
        about: "About App",
        version: "Version 1.0.2",
        enabled: "Enabled",
        disabled: "Disabled",
        saveSettings: "Save Settings"
      },
      faq: {
        title: "Frequently Asked Questions",
        helpCenter: "Help Center for Farmers"
      },
      services: {
        connectExpert: {
          title: "Connect with Expert",
          description: "Get advice from agriculture experts"
        },
        cropSuggestion: {
          title: "Crop Suggestion",
          description: "AI-powered crop recommendations"
        },
        cropInsurance: {
          title: "Crop Insurance",
          description: "Protect your crops with insurance"
        },
        training: {
          title: "Training & Tutorials",
          description: "Learn modern farming techniques"
        },
        govSchemes: {
          title: "Government Schemes",
          description: "Access government benefits"
        }
      },
      accessService: "Access Service",
      cropSuggestionPage: {
        title: "AI-Powered Crop Recommendations",
        description: "Get personalized crop suggestions based on your location, soil type, and weather conditions.",
        locationLabel: "Your Location",
        locationPlaceholder: "Enter your district/state",
        seasonLabel: "Season",
        seasonPlaceholder: "Kharif/Rabi/Zaid",
        getSuggestions: "Get Crop Suggestions"
      },
      govSchemesPage: {
        title: "Government Schemes & Benefits",
        description: "Access various government schemes and subsidies available for farmers.",
        viewSchemes: "View All Schemes",
        apply: "Apply Now",
        eligibility: "Check Eligibility"
      },
      serviceDialogs: {
        expertConnect: {
          title: "Connect with Agricultural Expert",
          description: "Get personalized advice from certified agricultural experts",
          selectExpert: "Select an Expert",
          bookConsultation: "Book Consultation",
          chatNow: "Chat Now",
          available: "Available",
          rating: "Rating"
        },
        cropSuggestion: {
          title: "AI-Powered Crop Recommendations",
          description: "Get personalized crop suggestions based on your location, soil type, weather conditions and budget"
        },
        insurance: {
          title: "Crop Insurance Services",
          description: "Protect your crops with comprehensive insurance coverage",
          viewPlans: "View Insurance Plans",
          calculatePremium: "Calculate Premium",
          claimStatus: "Check Claim Status"
        },
        training: {
          title: "Training & Educational Resources",
          description: "Learn modern farming techniques and best practices",
          viewCourses: "View Courses",
          startLearning: "Start Learning",
          downloadResources: "Download Resources"
        },
        schemes: {
          title: "Government Schemes & Subsidies",
          description: "Access various government benefits and subsidies",
          browseSchemes: "Browse Schemes",
          checkEligibility: "Check Eligibility",
          apply: "Apply Now"
        }
      }
    },
    hi: {
      brandName: "कृषि संकल्प",
      tagline: "एआई-संचालित फसल सलाहकार",
      searchPlaceholder: "सेवाओं, योजनाओं या जानकारी के लिए खोजें...",
      tabs: {
        home: "होम",
        cropSuggestion: "फसल सुझाव",
        govSchemes: "सरकारी योजनाएं"
      },
      quickServices: "त्वरित सेवाएं",
      menuItems: {
        settings: "सेटिंग्स",
        aiChatbot: "एआई चैटबॉट",
        faq: "सामान्य प्रश्न",
        userAccount: "उपयोगकर्ता खाता"
      },
      chatbot: {
        title: "एआई सहायक",
        placeholder: "कृषि के बारे में कुछ भी पूछें...",
        send: "भेजें"
      },
      profile: {
        title: "उपयोगकर्ता प्रोफ़ाइल",
        name: "किसान का नाम",
        phone: "फोन नंबर",
        location: "स्थान",
        crops: "उगाई जाने वाली फसलें",
        edit: "प्रोफ़ाइल संपादित करें"
      },
      settings: {
        title: "ऐप सेटिंग्स",
        language: "भाषा प्राथमिकता",
        notifications: "सूचनाएं",
        voiceInput: "ध्वनि इनपुट",
        textSize: "पाठ आकार",
        offlineMode: "ऑफ़लाइन मोड",
        dataUsage: "डेटा उपयोग",
        about: "ऐप के बारे में",
        version: "संस्करण 1.0.2",
        enabled: "सक्षम",
        disabled: "अक्षम",
        saveSettings: "सेटिंग्स सहेजें"
      },
      faq: {
        title: "अक्सर पूछे जाने वाले प्रश्न",
        helpCenter: "किसानों के लिए सहायता केंद्र"
      },
      services: {
        connectExpert: {
          title: "विशेषज्ञ से जुड़ें",
          description: "कृषि विशेषज्ञों से सलाह लें"
        },
        cropSuggestion: {
          title: "फसल सुझाव",
          description: "एआई-संचालित फसल सिफारिशें"
        },
        cropInsurance: {
          title: "फसल बीमा",
          description: "अपनी फसलों को बीमा से सुरक्षित करें"
        },
        training: {
          title: "प्रशिक्षण और ट्यूटोरियल",
          description: "आधुनिक कृषि तकनीकें सीखें"
        },
        govSchemes: {
          title: "सरकारी योजनाएं",
          description: "सरकारी लाभों का उपयोग करें"
        }
      },
      accessService: "सेवा का उपयोग करें",
      cropSuggestionPage: {
        title: "एआई-संचालित फसल सिफारिशें",
        description: "अपने स्थान, मिट्टी के प्रकार और मौसम की स्थिति के आधार पर व्यक्तिगत फसल सुझाव प्राप्त करें।",
        locationLabel: "आपका स्थान",
        locationPlaceholder: "अपना जिला/राज्य दर्ज करें",
        seasonLabel: "मौसम",
        seasonPlaceholder: "खरीफ/रबी/जायद",
        getSuggestions: "फसल सुझाव प्राप्त करें"
      },
      govSchemesPage: {
        title: "सरकारी योजनाएं और लाभ",
        description: "किसानों के लिए उपलब्ध विभिन्न सरकारी योजनाओं और सब्सिडी का उपयोग करें।",
        viewSchemes: "सभी योजनाएं देखें",
        apply: "अभी आवेदन करें",
        eligibility: "योग्यता जांचें"
      },
      serviceDialogs: {
        expertConnect: {
          title: "कृषि विशेषज्ञ से जुड़ें",
          description: "प्रमाणित कृषि विशेषज्ञों से व्यक्तिगत सलाह प्राप्त करें",
          selectExpert: "एक विशेषज्ञ चुनें",
          bookConsultation: "परामर्श बुक करें",
          chatNow: "अभी चैट करें",
          available: "उपलब्ध",
          rating: "रेटिंग"
        },
        cropSuggestion: {
          title: "एआई-संचालित फसल सिफारिशें",
          description: "अपने स्थान, मिट्टी के प्रकार, मौसम की स्थिति और बजट के आधार पर व्यक्तिगत फसल सुझाव प्राप्त करें"
        },
        insurance: {
          title: "फसल बीमा सेवाएं",
          description: "व्यापक बीमा कवरेज के साथ अपनी फसलों की सुरक्षा करें",
          viewPlans: "बीमा योजनाएं देखें",
          calculatePremium: "प्रीमियम की गणना करें",
          claimStatus: "दावे की स्थिति जांचें"
        },
        training: {
          title: "प्रशिक्षण और शैक्षिक संसाधन",
          description: "आधुनिक कृषि तकनीकें और सर्वोत्तम प्रथाएं सीखें",
          viewCourses: "कोर्स देखें",
          startLearning: "सीखना शुरू करें",
          downloadResources: "संसाधन डाउनलोड करें"
        },
        schemes: {
          title: "सरकारी योजनाएं और सब्सिडी",
          description: "विभिन्न सरकारी लाभ और सब्सिडी का उपयोग करें",
          browseSchemes: "योजनाएं ब्राउज़ करें",
          checkEligibility: "योग्यता जांचें",
          apply: "अभी आवेदन करें"
        }
      }
    }
  };

  const t = translations[language];

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const services = [
    {
      id: 1,
      title: t.services.connectExpert.title,
      icon: Users,
      description: t.services.connectExpert.description,
      color: "text-orange-600"
    },
    {
      id: 2,
      title: t.services.cropSuggestion.title,
      icon: Sprout,
      description: t.services.cropSuggestion.description,
      color: "text-green-600"
    },
    {
      id: 3,
      title: t.services.cropInsurance.title,
      icon: Shield,
      description: t.services.cropInsurance.description,
      color: "text-amber-600"
    },
    {
      id: 4,
      title: t.services.training.title,
      icon: BookOpen,
      description: t.services.training.description,
      color: "text-yellow-600"
    },
    {
      id: 5,
      title: t.services.govSchemes.title,
      icon: Building2,
      description: t.services.govSchemes.description,
      color: "text-orange-700"
    }
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "hi" : "en");
  };

  const handleServiceClick = (serviceId) => {
    setActiveServiceDialog(serviceId);
  };

  const renderServiceDialog = () => {
    if (!activeServiceDialog) return null;

    const serviceData = {
      1: { // Connect with Expert
        title: t.serviceDialogs.expertConnect.title,
        content: (
          <div className="space-y-6">
            <p className="text-gray-600">{t.serviceDialogs.expertConnect.description}</p>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Available Experts</h3>
              {[
                { name: "Dr. Rajesh Kumar", specialty: "Crop Diseases", rating: 4.8, available: true },
                { name: "Dr. Priya Singh", specialty: "Soil Management", rating: 4.9, available: true },
                { name: "Dr. Amit Sharma", specialty: "Pest Control", rating: 4.7, available: false }
              ].map((expert, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{expert.name}</h4>
                        <p className="text-sm text-gray-600">{expert.specialty}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{expert.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Badge variant={expert.available ? "default" : "secondary"}>
                        {expert.available ? t.serviceDialogs.expertConnect.available : "Busy"}
                      </Badge>
                      <div className="space-x-2">
                        <Button size="sm" disabled={!expert.available}>
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {t.serviceDialogs.expertConnect.chatNow}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )
      },
      2: { // Crop Suggestion
        title: t.serviceDialogs.cropSuggestion.title,
        content: (
          <div className="space-y-6">
            <p className="text-gray-600">{t.serviceDialogs.cropSuggestion.description}</p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Your Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="border-orange-200 focus:border-orange-400 h-12 bg-white">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent className="bg-white max-h-64 z-50">
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state} className="cursor-pointer hover:bg-orange-50">
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Season</label>
                  <Select>
                    <SelectTrigger className="border-orange-200 focus:border-orange-400 h-12">
                      <SelectValue placeholder="Select cropping season" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kharif">Kharif (Jun-Oct)</SelectItem>
                      <SelectItem value="rabi">Rabi (Nov-Apr)</SelectItem>
                      <SelectItem value="zaid">Zaid (May-Aug)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Soil Type</label>
                  <Select>
                    <SelectTrigger className="border-orange-200 focus:border-orange-400 h-12">
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">Clay Soil</SelectItem>
                      <SelectItem value="sandy">Sandy Soil</SelectItem>
                      <SelectItem value="loamy">Loamy Soil</SelectItem>
                      <SelectItem value="silt">Silt Soil</SelectItem>
                      <SelectItem value="peat">Peat Soil</SelectItem>
                      <SelectItem value="chalk">Chalk Soil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Budget (₹)</label>
                  <Input placeholder="Enter your budget" className="border-orange-200 focus:border-orange-400 h-12" />
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 h-12 text-lg">
                <Sprout className="w-5 h-5 mr-2" />
                Get AI Crop Recommendations
              </Button>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">Recommended Crops for You:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { name: "Wheat", season: "Rabi", profit: "High" },
                    { name: "Rice", season: "Kharif", profit: "Medium" },
                    { name: "Sugarcane", season: "Annual", profit: "Very High" }
                  ].map((crop, index) => (
                    <div key={index} className="bg-white p-3 rounded border border-green-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-green-700">{crop.name}</p>
                          <p className="text-sm text-gray-600">{crop.season} Season</p>
                        </div>
                        <Badge variant={crop.profit === "Very High" ? "default" : "secondary"}>
                          {crop.profit}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      },
      3: { // Crop Insurance
        title: t.serviceDialogs.insurance.title,
        content: (
          <div className="space-y-6">
            <p className="text-gray-600">{t.serviceDialogs.insurance.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 border-orange-200">
                <h3 className="font-medium mb-2">Basic Coverage</h3>
                <p className="text-sm text-gray-600 mb-3">Protection against natural disasters</p>
                <div className="text-2xl font-bold text-orange-600 mb-2">₹2,500/acre</div>
                <Button className="w-full" size="sm">{t.serviceDialogs.insurance.viewPlans}</Button>
              </Card>
              
              <Card className="p-4 border-amber-200">
                <h3 className="font-medium mb-2">Premium Coverage</h3>
                <p className="text-sm text-gray-600 mb-3">Comprehensive protection including price fluctuation</p>
                <div className="text-2xl font-bold text-amber-600 mb-2">₹4,500/acre</div>
                <Button className="w-full" size="sm">{t.serviceDialogs.insurance.calculatePremium}</Button>
              </Card>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500">
                {t.serviceDialogs.insurance.claimStatus}
              </Button>
            </div>
          </div>
        )
      },
      4: { // Training
        title: t.serviceDialogs.training.title,
        content: (
          <div className="space-y-6">
            <p className="text-gray-600">{t.serviceDialogs.training.description}</p>
            
            <div className="space-y-4">
              {[
                { title: "Modern Irrigation Techniques", duration: "2 hours", level: "Beginner" },
                { title: "Organic Farming Methods", duration: "3 hours", level: "Intermediate" },
                { title: "Pest Management Strategies", duration: "1.5 hours", level: "Advanced" }
              ].map((course, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </span>
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">{t.serviceDialogs.training.startLearning}</Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500">
              {t.serviceDialogs.training.downloadResources}
            </Button>
          </div>
        )
      },
      5: { // Government Schemes
        title: t.serviceDialogs.schemes.title,
        content: (
          <div className="space-y-6">
            <p className="text-gray-600">{t.serviceDialogs.schemes.description}</p>
            
            <div className="space-y-4">
              {[
                { name: "PM-KISAN Scheme", amount: "₹6,000/year", status: "Active" },
                { name: "Soil Health Card", amount: "Free", status: "Available" },
                { name: "Crop Insurance Subsidy", amount: "Up to 50%", status: "Available" }
              ].map((scheme, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{scheme.name}</h4>
                        <p className="text-sm text-gray-600">Benefit: {scheme.amount}</p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Badge variant={scheme.status === "Active" ? "default" : "secondary"}>
                        {scheme.status}
                      </Badge>
                      <Button size="sm">{t.serviceDialogs.schemes.apply}</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                {t.serviceDialogs.schemes.browseSchemes}
              </Button>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                {t.serviceDialogs.schemes.checkEligibility}
              </Button>
            </div>
          </div>
        )
      }
    };

    const currentService = serviceData[activeServiceDialog];
    if (!currentService) return null;

    return (
      <Dialog open={!!activeServiceDialog} onOpenChange={() => setActiveServiceDialog(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{currentService.title}</DialogTitle>
            <DialogDescription>
              Access detailed information and services for {currentService.title.toLowerCase()}
            </DialogDescription>
          </DialogHeader>
          {currentService.content}
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 text-white hover:bg-white/10 p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Wheat className="w-6 h-6 text-orange-600" />
                  <span>{t.brandName}</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start space-x-4 h-14 text-lg hover:bg-orange-50 rounded-xl"
                  onClick={() => {
                    setSidebarOpen(false);
                    setSettingsOpen(true);
                  }}
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="font-medium">{t.menuItems.settings}</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start space-x-4 h-14 text-lg hover:bg-blue-50 rounded-xl"
                  onClick={() => {
                    setSidebarOpen(false);
                    setChatbotOpen(true);
                  }}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-medium">{t.menuItems.aiChatbot}</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start space-x-4 h-14 text-lg hover:bg-green-50 rounded-xl"
                  onClick={() => {
                    setSidebarOpen(false);
                    setFaqOpen(true);
                  }}
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-medium">{t.menuItems.faq}</span>
                </Button>
                
                <Separator className="my-6" />
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start space-x-4 h-14 text-lg hover:bg-purple-50 rounded-xl"
                  onClick={() => {
                    setSidebarOpen(false);
                    setUserProfileOpen(true);
                  }}
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="font-medium">{t.menuItems.userAccount}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="relative">
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 border-2 border-white/30">
              <Wheat className="w-5 h-5 text-amber-200" />
              <div className="text-white font-bold text-sm tracking-wide">
                {t.brandName}
              </div>
              <Sprout className="w-5 h-5 text-green-200" />
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
            <Bell className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Desktop Header */}
        <div className="hidden md:block p-6">
          <div className="max-w-4xl mx-auto">
            {/* Desktop Navigation Bar */}
            <div className="flex items-center justify-center mb-6 relative">
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="absolute left-0 text-white hover:bg-white/10">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-2">
                      <Wheat className="w-6 h-6 text-orange-600" />
                      <span>{t.brandName}</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start space-x-4 h-14 text-lg hover:bg-orange-50 rounded-xl"
                      onClick={() => {
                        setSidebarOpen(false);
                        setSettingsOpen(true);
                      }}
                    >
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Settings className="w-6 h-6 text-orange-600" />
                      </div>
                      <span className="font-medium">{t.menuItems.settings}</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start space-x-4 h-14 text-lg hover:bg-blue-50 rounded-xl"
                      onClick={() => {
                        setSidebarOpen(false);
                        setChatbotOpen(true);
                      }}
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="font-medium">{t.menuItems.aiChatbot}</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start space-x-4 h-14 text-lg hover:bg-green-50 rounded-xl"
                      onClick={() => {
                        setSidebarOpen(false);
                        setFaqOpen(true);
                      }}
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="font-medium">{t.menuItems.faq}</span>
                    </Button>
                    
                    <Separator className="my-6" />
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start space-x-4 h-14 text-lg hover:bg-purple-50 rounded-xl"
                      onClick={() => {
                        setSidebarOpen(false);
                        setUserProfileOpen(true);
                      }}
                    >
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="font-medium">{t.menuItems.userAccount}</span>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Logo and Branding */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                    <Wheat className="w-8 h-8 text-amber-200" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white tracking-wide">
                        {t.brandName}
                      </div>
                    </div>
                    <Sprout className="w-8 h-8 text-green-200" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-20 blur"></div>
                </div>
              </div>
              <p className="text-center text-amber-100 mb-4 text-lg">{t.tagline}</p>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="px-4 pb-6 md:px-6 md:pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Input
                placeholder={t.searchPlaceholder}
                className="pl-14 pr-16 bg-white text-gray-900 border-2 border-orange-200 h-16 shadow-xl rounded-2xl text-lg focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600 p-2 rounded-full hover:bg-orange-50"
              >
                <Mic className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4">
        {/* Tabs */}
        <Tabs defaultValue="home" className="w-full">
          {/* Mobile: Horizontally scrollable tabs, Desktop: Centered */}
          <div className="w-full mb-8">
            <div className="flex justify-center">
              <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
                <TabsList className="inline-flex h-14 items-center justify-center rounded-xl bg-white border-2 border-orange-200 p-2 text-muted-foreground mx-4 md:mx-0 shadow-lg">
                <TabsTrigger 
                  value="home" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white whitespace-nowrap px-6 md:px-8 py-3 text-sm md:text-lg font-bold rounded-lg transition-all duration-200 data-[state=active]:shadow-lg"
                >
                  {t.tabs.home}
                </TabsTrigger>
                <TabsTrigger 
                  value="crop-suggestion" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white whitespace-nowrap px-6 md:px-8 py-3 text-sm md:text-lg font-bold rounded-lg transition-all duration-200 data-[state=active]:shadow-lg"
                >
                  {t.tabs.cropSuggestion}
                </TabsTrigger>
                <TabsTrigger 
                  value="gov-schemes" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white whitespace-nowrap px-6 md:px-8 py-3 text-sm md:text-lg font-bold rounded-lg transition-all duration-200 data-[state=active]:shadow-lg"
                >
                  {t.tabs.govSchemes}
                </TabsTrigger>
              </TabsList>
              </div>
            </div>
          </div>

          <TabsContent value="home" className="space-y-6">
            {/* Services Grid */}
            <div>
              <h2 className="text-gray-900 mb-6 text-2xl font-bold text-center">{t.quickServices}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={service.id} className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-orange-200 hover:border-orange-400 bg-white/90 backdrop-blur-sm hover:scale-105">
                      <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-6">
                          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 shadow-lg">
                            <IconComponent className={`w-12 h-12 ${service.color}`} />
                          </div>
                        </div>
                        <h3 className="text-gray-900 mb-3 text-lg font-bold">{service.title}</h3>
                        <p className="text-gray-600 mb-6 text-base leading-relaxed">{service.description}</p>
                        <Button 
                          onClick={() => handleServiceClick(service.id)}
                          className="w-full h-14 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <IconComponent className="w-5 h-5 mr-2" />
                          {t.accessService}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>


          </TabsContent>

          <TabsContent value="crop-suggestion" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
              <CardContent className="p-6">
                <h2 className="text-gray-900 mb-4">{t.cropSuggestionPage.title}</h2>
                <p className="text-gray-600 mb-4">
                  {t.cropSuggestionPage.description}
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">{t.cropSuggestionPage.locationLabel}</label>
                      <Select value={selectedLocationTab} onValueChange={setSelectedLocationTab}>
                        <SelectTrigger className="border-orange-200 focus:border-orange-400 bg-white">
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent className="bg-white max-h-64 z-50">
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state} className="cursor-pointer hover:bg-orange-50">
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">{t.cropSuggestionPage.seasonLabel}</label>
                      <Select>
                        <SelectTrigger className="border-orange-200 focus:border-orange-400">
                          <SelectValue placeholder="Select cropping season" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kharif">Kharif (Jun-Oct)</SelectItem>
                          <SelectItem value="rabi">Rabi (Nov-Apr)</SelectItem>
                          <SelectItem value="zaid">Zaid (May-Aug)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">{t.cropSuggestionPage.getSuggestions}</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gov-schemes" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
              <CardContent className="p-6">
                <h2 className="text-gray-900 mb-4">{t.govSchemesPage.title}</h2>
                <p className="text-gray-600 mb-4">
                  {t.govSchemesPage.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <Card className="p-4 border-orange-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">PM-KISAN Scheme</h4>
                          <p className="text-sm text-gray-600">Direct income support of ₹6,000 per year</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </Card>
                  
                  <Card className="p-4 border-amber-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center">
                          <FileText className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Soil Health Card</h4>
                          <p className="text-sm text-gray-600">Free soil testing and nutrient recommendations</p>
                        </div>
                      </div>
                      <Badge variant="outline">Available</Badge>
                    </div>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    {t.govSchemesPage.viewSchemes}
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                    {t.govSchemesPage.eligibility}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* AI Chatbot Button */}
        <Button
          onClick={() => setChatbotOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 hover:scale-110"
          size="sm"
        >
          <Bot className="w-8 h-8" />
        </Button>
        
        {/* Language Switch */}
        <Button
          onClick={toggleLanguage}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 hover:scale-110"
          size="sm"
        >
          <div className="flex flex-col items-center">
            <Languages className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold">
              {language === "en" ? "हिं" : "EN"}
            </span>
          </div>
        </Button>
      </div>

      {/* Service Dialogs */}
      {renderServiceDialog()}

      {/* AI Chatbot Dialog */}
      <Dialog open={chatbotOpen} onOpenChange={setChatbotOpen}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-blue-600" />
              <span>{t.chatbot.title}</span>
            </DialogTitle>
            <DialogDescription>
              Get instant farming advice, weather updates, and crop guidance in your language
            </DialogDescription>
          </DialogHeader>
          
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button variant="outline" size="sm" className="text-left justify-start">
              <Sprout className="w-4 h-4 mr-2" />
              Crop Advice
            </Button>
            <Button variant="outline" size="sm" className="text-left justify-start">
              <Shield className="w-4 h-4 mr-2" />
              Insurance Help
            </Button>
            <Button variant="outline" size="sm" className="text-left justify-start">
              <Building2 className="w-4 h-4 mr-2" />
              Gov Schemes
            </Button>
            <Button variant="outline" size="sm" className="text-left justify-start">
              <Users className="w-4 h-4 mr-2" />
              Expert Connect
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[350px] bg-gradient-to-b from-blue-50 to-white rounded-lg border-2 border-blue-100">
            {/* Welcome Message */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm max-w-[85%] border border-blue-100">
                <p className="text-sm mb-2">🙏 Namaste! I'm your AI farming assistant.</p>
                <p className="text-sm text-gray-600">I can help you with:</p>
                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                  <li>• Crop recommendations for your area</li>
                  <li>• Weather alerts and farming tips</li>
                  <li>• Government scheme information</li>
                  <li>• Pest and disease identification</li>
                </ul>
              </div>
            </div>
            
            {/* Sample User Message */}
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">मेरी गेहूं की फसल में पीले पत्ते दिख रहे हैं, क्या करूं?</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            
            {/* AI Response */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm max-w-[85%] border border-blue-100">
                <p className="text-sm mb-2">गेहूं में पीले पत्ते का मतलब है:</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>🌱 <strong>नाइट्रोजन की कमी</strong> - यूरिया का स्प्रे करें</p>
                  <p>💧 <strong>पानी की कमी</strong> - तुरंत सिंचाई करें</p>
                  <p>🦠 <strong>Yellow Rust disease</strong> हो सकती है</p>
                </div>
                <p className="text-xs text-blue-600 mt-2">क्या आप किसी एक्सपर्ट से बात करना चाहते हैं?</p>
              </div>
            </div>

            {/* Suggested Actions */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm max-w-[85%] border border-blue-100">
                <p className="text-sm mb-3">मैं आपकी और मदद कैसे कर सकता हूं?</p>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full text-left">
                    <Users className="w-4 h-4 mr-2" />
                    एक्सपर्ट से बात करें
                  </Button>
                  <Button size="sm" variant="outline" className="w-full text-left">
                    <Sprout className="w-4 h-4 mr-2" />
                    मिट्टी टेस्ट की जानकारी
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="space-y-3 mt-4">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Input
                  placeholder={t.chatbot.placeholder}
                  className="pr-14 h-12 border-2 border-blue-200 focus:border-blue-400"
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50"
                >
                  <Mic className="w-5 h-5" />
                </Button>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 h-12">
                {t.chatbot.send}
              </Button>
            </div>
            
            {/* Voice Commands Info */}
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <Mic className="w-3 h-3" />
              <span>आप हिंदी या English में बोल सकते हैं</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-orange-600" />
              <span>{t.settings.title}</span>
            </DialogTitle>
            <DialogDescription>
              Customize your app preferences and settings for better farming experience
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Language Setting */}
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <Languages className="w-5 h-5 text-orange-600" />
                <span className="font-medium">{t.settings.language}</span>
              </label>
              <div className="flex space-x-3">
                <Button 
                  variant={language === "en" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setLanguage("en")}
                  className="flex-1"
                >
                  English
                </Button>
                <Button 
                  variant={language === "hi" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setLanguage("hi")}
                  className="flex-1"
                >
                  हिंदी
                </Button>
              </div>
            </div>

            <Separator />

            {/* Notifications Setting */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-blue-600" />
                <div>
                  <span className="font-medium">{t.settings.notifications}</span>
                  <p className="text-sm text-gray-600">Get alerts for weather, prices, and schemes</p>
                </div>
              </div>
              <ToggleRight className="w-6 h-6 text-green-600" />
            </div>

            <Separator />

            {/* Voice Input Setting */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-purple-600" />
                <div>
                  <span className="font-medium">{t.settings.voiceInput}</span>
                  <p className="text-sm text-gray-600">Enable voice commands and speech input</p>
                </div>
              </div>
              <ToggleRight className="w-6 h-6 text-green-600" />
            </div>

            <Separator />

            {/* Text Size Setting */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <TextCursorInput className="w-5 h-5 text-amber-600" />
                <span className="font-medium">{t.settings.textSize}</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">Small</Button>
                <Button variant="default" size="sm" className="flex-1">Medium</Button>
                <Button variant="outline" size="sm" className="flex-1">Large</Button>
              </div>
            </div>

            <Separator />

            {/* Offline Mode Setting */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <WifiOff className="w-5 h-5 text-gray-600" />
                <div>
                  <span className="font-medium">{t.settings.offlineMode}</span>
                  <p className="text-sm text-gray-600">Download content for offline access</p>
                </div>
              </div>
              <ToggleLeft className="w-6 h-6 text-gray-400" />
            </div>

            <Separator />

            {/* Data Usage Setting */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5 text-indigo-600" />
                <div>
                  <span className="font-medium">{t.settings.dataUsage}</span>
                  <p className="text-sm text-gray-600">Optimize for low data usage</p>
                </div>
              </div>
              <ToggleRight className="w-6 h-6 text-green-600" />
            </div>

            <Separator />

            {/* About Section */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Info className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{t.settings.about}</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-orange-800">KRISHI SANKALP</h4>
                <p className="text-sm text-orange-700">AI-Driven Crop Advisory</p>
                <p className="text-xs text-orange-600 mt-2">{t.settings.version}</p>
              </div>
            </div>

            <Button className="w-full bg-orange-600 hover:bg-orange-700 h-12">
              <Settings className="w-5 h-5 mr-2" />
              {t.settings.saveSettings}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* FAQ Dialog */}
      <Dialog open={faqOpen} onOpenChange={setFaqOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-green-600" />
              <span>{t.faq.title}</span>
            </DialogTitle>
            <DialogDescription>
              {t.faq.helpCenter}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* FAQ Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 border-orange-200 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Crop Guidance</h4>
                    <p className="text-sm text-gray-600">Farming tips and crop advice</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Assistant</h4>
                    <p className="text-sm text-gray-600">How to use the chatbot</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Government Schemes</h4>
                    <p className="text-sm text-gray-600">How to apply for benefits</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-purple-200 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Insurance Help</h4>
                    <p className="text-sm text-gray-600">Crop insurance guidance</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Common Questions */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Common Questions</h3>
              
              {/* Question 1 */}
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">How do I get crop recommendations?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Go to "Crop Suggestion" tab or click the crop suggestion service. Enter your location, season, soil type, and budget to get AI-powered recommendations.
                    </p>
                    <p className="text-sm text-gray-600">
                      The AI considers weather patterns, soil conditions, and market prices to suggest the best crops for your farm.
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 ml-2" />
                </div>
              </Card>

              {/* Question 2 */}
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">How to apply for PM-KISAN scheme?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Click on "Government Schemes" and select PM-KISAN. You'll need your Aadhaar card, bank details, and land documents.
                    </p>
                    <p className="text-sm text-gray-600">
                      The app will guide you through the application process step by step with simple instructions.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 ml-2" />
                </div>
              </Card>

              {/* Question 3 */}
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">What is crop insurance and how to get it?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Crop insurance protects your crops from natural disasters and weather damage. Go to "Crop Insurance" service to see available plans.
                    </p>
                    <p className="text-sm text-gray-600">
                      You can compare different insurance plans and calculate premiums based on your crop type and area.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 ml-2" />
                </div>
              </Card>

              {/* Question 4 */}
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">How to use voice input feature?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Look for the microphone icon in the search bar and chatbot. Tap it and speak your question in Hindi or English.
                    </p>
                    <p className="text-sm text-gray-600">
                      The app can understand farming terms in both languages and provide appropriate responses.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 ml-2" />
                </div>
              </Card>

              {/* Question 5 */}
              <Card className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">How to connect with agricultural experts?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Use the "Connect with Expert" service to chat with certified agricultural specialists for personalized advice.
                    </p>
                    <p className="text-sm text-gray-600">
                      You can ask about crop diseases, soil problems, pest control, and get real-time expert guidance.
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 ml-2" />
                </div>
              </Card>
            </div>

            {/* Contact Support */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <h4 className="font-medium mb-3 text-center">Need More Help?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Support</span>
                </Button>
                <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat</span>
                </Button>
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>

      {/* User Profile Dialog */}
      <Dialog open={userProfileOpen} onOpenChange={setUserProfileOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-orange-600" />
              <span>{t.profile.title}</span>
            </DialogTitle>
            <DialogDescription>
              Manage your complete farmer profile and farming information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Profile Header */}
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
              <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                <AvatarImage src="" />
                <AvatarFallback className="bg-orange-100 text-orange-600 text-xl font-bold">
                  RK
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">Raj Kumar</h3>
                <p className="text-sm text-gray-600">Experienced Farmer</p>
                <Badge className="mt-1 bg-green-100 text-green-800">Verified</Badge>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-medium flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-600" />
                <span>Personal Information</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">{t.profile.phone}</p>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">raj.kumar@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-sm text-gray-600">{t.profile.location}</p>
                  <p className="font-medium">Village Rampur, Tehsil Ludhiana, Punjab, India</p>
                  <p className="text-sm text-gray-500">PIN: 141008</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Farm Information */}
            <div className="space-y-4">
              <h4 className="font-medium flex items-center space-x-2">
                <Wheat className="w-4 h-4 text-amber-600" />
                <span>Farm Details</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-700 font-medium">Total Land</p>
                  <p className="text-lg font-bold text-green-800">12.5 Acres</p>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 font-medium">Irrigated Land</p>
                  <p className="text-lg font-bold text-blue-800">10 Acres</p>
                </div>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-700 font-medium mb-2">{t.profile.crops}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Wheat (Rabi)</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Rice (Kharif)</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Sugarcane</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Mustard</Badge>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">Farming Experience</p>
                <p className="font-medium">15+ Years</p>
              </div>
            </div>

            <Separator />

            {/* Government Benefits */}
            <div className="space-y-3">
              <h4 className="font-medium flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>Active Government Benefits</span>
              </h4>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <p className="font-medium text-green-800">PM-KISAN</p>
                    <p className="text-sm text-green-600">₹6,000/year</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <p className="font-medium text-blue-800">Crop Insurance</p>
                    <p className="text-sm text-blue-600">Premium Coverage</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Enrolled</Badge>
                </div>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <User className="w-4 h-4 mr-2" />
                {t.profile.edit}
              </Button>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                <FileText className="w-4 h-4 mr-2" />
                View Documents
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}