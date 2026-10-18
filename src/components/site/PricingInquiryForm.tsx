import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { business } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "SEO Services",
  "Local SEO",
  "GEO / AEO / LLMO and AI Visibility",
  "Digital Marketing and Advertising",
  "Website Design and Development",
  "Full-Stack Web Development",
  "n8n Workflow Automation",
  "AI Agent Development",
  "Other / Not Sure Yet",
] as const;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  projectDetails?: string;
}

interface FormTouched {
  fullName?: boolean;
  email?: boolean;
  phone?: boolean;
  service?: boolean;
  projectDetails?: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  projectDetails: "",
};

export function PricingInquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full Name is required.";
        if (value.trim().length < 2) return "Please enter a valid full name.";
        return "";
      case "email":
        if (!value.trim()) return "Email Address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address (e.g., name@example.com).";
        }
        return "";
      case "phone": {
        if (!value.trim()) return "";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10 || digits.length > 15) {
          return "Please enter a valid phone number (at least 10 digits).";
        }
        return "";
      }
      case "service":
        if (!value.trim()) return "Please select a service.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = e.target.name as keyof FormData;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const errorMsg = validateField(fieldName, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (errorMsg) {
          next[fieldName] = errorMsg;
        } else {
          delete next[fieldName];
        }
        return next;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = e.target.name as keyof FormData;
    const value = e.target.value;
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const errorMsg = validateField(fieldName, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (errorMsg) {
        next[fieldName] = errorMsg;
      } else {
        delete next[fieldName];
      }
      return next;
    });
  };

  /**
   * Frontend-only form submission handler.
   * NOTE: This is clearly isolated for the current frontend preview phase.
   * In a future phase, this function will be connected to the real backend database API.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullNameError = validateField("fullName", formData.fullName);
    const emailError = validateField("email", formData.email);
    const phoneError = validateField("phone", formData.phone);
    const serviceError = validateField("service", formData.service);

    const newErrors: FormErrors = {};
    if (fullNameError) newErrors.fullName = fullNameError;
    if (emailError) newErrors.email = emailError;
    if (phoneError) newErrors.phone = phoneError;
    if (serviceError) newErrors.service = serviceError;

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      service: true,
      projectDetails: true,
    });

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Brief UI feedback delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  // Step 5: Success Confirmation Panel
  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-primary/30 bg-card p-6 shadow-sm sm:p-10 transition-all">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
          </div>

          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Thank You for Contacting AVR Web Consulting!
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Thank you for your interest in our services. Our team will get in touch with you as soon
            as possible.
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Need immediate assistance? Contact us using your preferred method below.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-background/60 p-5 sm:p-6 text-left">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* WhatsApp Button */}
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20ba59] hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${business.email}?subject=${encodeURIComponent("Website Inquiry - AVR Web Consulting")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-input bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Email Us</span>
              </a>

              {/* Phone Button */}
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-input bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Submit another inquiry</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Inquiry Form
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-10">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Let's Discuss Your Project
        </h2>
        <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">
          Every business has different goals and requirements. Tell us about your project, and our
          team will contact you to discuss the right solutions for your business.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-foreground">
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Rahul Sharma"
              disabled={isSubmitting}
              className={cn(
                "mt-2 w-full min-h-[44px] rounded-xl border bg-background px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed",
                errors.fullName ? "border-destructive focus:ring-destructive" : "border-input",
              )}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. rahul@example.com"
              disabled={isSubmitting}
              className={cn(
                "mt-2 w-full min-h-[44px] rounded-xl border bg-background px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed",
                errors.email ? "border-destructive focus:ring-destructive" : "border-input",
              )}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                Phone Number
              </label>
              <span className="text-xs text-muted-foreground">Optional</span>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. +91 98765 43210"
              disabled={isSubmitting}
              className={cn(
                "mt-2 w-full min-h-[44px] rounded-xl border bg-background px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed",
                errors.phone ? "border-destructive focus:ring-destructive" : "border-input",
              )}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Select a Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-foreground">
              Select a Service <span className="text-destructive">*</span>
            </label>
            <div className="relative mt-2">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={cn(
                  "w-full min-h-[44px] appearance-none rounded-xl border bg-background px-3.5 py-2.5 pr-10 text-base sm:text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",
                  !formData.service && "text-muted-foreground",
                  errors.service ? "border-destructive focus:ring-destructive" : "border-input",
                )}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="" disabled className="text-muted-foreground">
                  Select a service...
                </option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service} className="text-foreground">
                    {service}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-muted-foreground">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.service && (
              <p
                id="service-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {errors.service}
              </p>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="projectDetails" className="block text-sm font-semibold text-foreground">
              Project Details
            </label>
            <span className="text-xs text-muted-foreground">Optional</span>
          </div>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Briefly describe your business, project, or requirements."
            className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full sm:w-auto min-w-[200px] h-12 text-base font-semibold shadow-sm transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
