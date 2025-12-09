"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Company type options for brands
const COMPANY_TYPES = [
  "Fashion Brand",
  "Product Brand",
  "E-commerce",
  "Fashion Retailer",
  "Luxury Brand",
  "Accessories Brand",
  "Beauty/Cosmetics Brand",
  "Jewelry Brand",
  "Styling Agency",
  "Marketing Agency",
  "Photography Studio",
  "Other"
] as const;

const formSchema = z.object({
  type: z.enum(["brand", "model"]),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  companyType: z.array(z.string()).optional(),
  socialHandle: z.string().min(1, "Social handle is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCompanyTypeOpen, setIsCompanyTypeOpen] = useState(false);
  const companyTypeRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "brand",
      companyType: [],
    },
  });

  const type = watch("type");
  const companyType = watch("companyType") || [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (companyTypeRef.current && !companyTypeRef.current.contains(event.target as Node)) {
        setIsCompanyTypeOpen(false);
      }
    };

    if (isCompanyTypeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCompanyTypeOpen]);

  // Toggle company type selection
  const toggleCompanyType = (companyTypeValue: string) => {
    const currentTypes = companyType || [];
    const newTypes = currentTypes.includes(companyTypeValue)
      ? currentTypes.filter(t => t !== companyTypeValue)
      : [...currentTypes, companyTypeValue];
    setValue("companyType", newTypes);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    console.log(data);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-sm shadow-xl text-center border-t-4 border-rose-gold"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4">Message Sent Successfully</h3>
        <p className="text-neutral-500 mb-8">
          Thank you for contacting Couture House Co. Our team will review your inquiry and get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 md:p-12 rounded-sm shadow-lg border border-neutral-100">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
        <label className={cn(
          "flex-1 cursor-pointer border rounded-lg p-4 text-center transition-all duration-300",
          type === "brand" ? "border-rose-gold bg-rose-gold/5" : "border-neutral-200 hover:border-neutral-300"
        )}>
          <input 
            type="radio" 
            value="brand" 
            className="hidden" 
            {...register("type")} 
          />
          <span className={cn("font-serif font-bold block mb-1", type === "brand" ? "text-rose-gold-dark" : "text-neutral-600")}>I'm a Brand</span>
          <span className="text-xs text-neutral-400">Looking for models</span>
        </label>

        <label className={cn(
          "flex-1 cursor-pointer border rounded-lg p-4 text-center transition-all duration-300",
          type === "model" ? "border-rose-gold bg-rose-gold/5" : "border-neutral-200 hover:border-neutral-300"
        )}>
          <input 
            type="radio" 
            value="model" 
            className="hidden" 
            {...register("type")} 
          />
          <span className={cn("font-serif font-bold block mb-1", type === "model" ? "text-rose-gold-dark" : "text-neutral-600")}>I'm a Model</span>
          <span className="text-xs text-neutral-400">Applying to join</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Full Name</label>
          <input
            {...register("name")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Email Address</label>
          <input
            {...register("email")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            {type === "brand" ? "Company Name" : "Portfolio URL (Optional)"}
          </label>
          <input
            {...register("company")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder={type === "brand" ? "Acme Fashion" : "https://portfolio.com"}
          />
        </div>

        {/* Company Type Multi-Select - Only shown for brands */}
        <AnimatePresence>
          {type === "brand" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium text-neutral-700">Company Type</label>
              <div className="relative" ref={companyTypeRef}>
                {/* Dropdown trigger button */}
                <button
                  type="button"
                  onClick={() => setIsCompanyTypeOpen(!isCompanyTypeOpen)}
                  className={cn(
                    "w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors",
                    "flex items-center justify-between text-left bg-white",
                    companyType.length > 0 && "border-rose-gold"
                  )}
                >
                  <span className={cn(
                    "text-sm",
                    companyType.length === 0 ? "text-neutral-400" : "text-neutral-700"
                  )}>
                    {companyType.length === 0 
                      ? "Select company types..." 
                      : companyType.length === 1
                      ? companyType[0]
                      : `${companyType.length} types selected`
                    }
                  </span>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-neutral-400 transition-transform",
                    isCompanyTypeOpen && "transform rotate-180"
                  )} />
                </button>

                {/* Dropdown menu */}
                <AnimatePresence>
                  {isCompanyTypeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-sm shadow-lg max-h-60 overflow-y-auto"
                    >
                      <div className="p-2 space-y-1">
                        {COMPANY_TYPES.map((companyTypeValue) => {
                          const isSelected = companyType.includes(companyTypeValue);
                          return (
                            <label
                              key={companyTypeValue}
                              className={cn(
                                "flex items-center p-2 rounded-sm cursor-pointer hover:bg-neutral-50 transition-colors",
                                isSelected && "bg-rose-gold/5"
                              )}
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleCompanyType(companyTypeValue)}
                                className="w-4 h-4 text-rose-gold border-neutral-300 rounded focus:ring-rose-gold focus:ring-2"
                              />
                              <span className="ml-2 text-sm text-neutral-700">{companyTypeValue}</span>
                            </label>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Selected tags display */}
              {companyType.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {companyType.map((selectedType) => (
                    <span
                      key={selectedType}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-rose-gold/10 text-rose-gold-dark rounded-sm"
                    >
                      {selectedType}
                      <button
                        type="button"
                        onClick={() => toggleCompanyType(selectedType)}
                        className="hover:text-rose-gold-dark/70 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            {type === "brand" ? "Instagram / Website" : "Instagram Handle"}
          </label>
          <input
            {...register("socialHandle")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder={type === "brand" ? "@brandname" : "@username"}
          />
          {errors.socialHandle && <p className="text-red-500 text-xs">{errors.socialHandle.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-700">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors resize-none"
          placeholder="Tell us about your project or background..."
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        variant="luxury" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

