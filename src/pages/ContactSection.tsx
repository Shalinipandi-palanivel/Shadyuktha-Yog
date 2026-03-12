import { useState } from "react";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const inquiryOptions = [
  "Shadyuktha Yog – Complete Program",
  "YCB Level 1 – Yoga Protocol Instructor",
  "YCB Level 2 – Yoga Wellness Instructor",
  "YCB Level 3 – Yoga Teacher & Evaluator",
  "Specialized Workshops",
  "Beginner Level",
  "Intermediate Level",
  "Advanced Level",
  "Pre-Natal and Post-Natal Program",
  "Kids Yoga",
  "Pranayam Class",
  "Mind-Body and Inner Clarity",
  "Ashtanga Series",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    inquiry: inquiryOptions[0],
    message: "",
  });

  const [selected, setSelected] = useState(inquiryOptions[0]);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mobile = form.phone.replace(form.countryCode.replace("+", ""), "");

    const fullnumber = form.countryCode + mobile;

    const payload = {
      name: form.name,
      email: form.email,
      enquiryfor: form.inquiry,
      message: form.message,
      number: {
        countryCode: form.countryCode,
        mobile: mobile,
        fullnumber: fullnumber,
      },
    };

    // console.log("SENDING PAYLOAD:", payload);

    try {
      const res = await fetch(
        "https://backend.shadyukthayog.com/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      console.log("SERVER RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        inquiry: inquiryOptions[0],
        message: "",
      });

      setSelected(inquiryOptions[0]);

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-background overflow-x-hidden"
    >
      <div className="container-fluid mx-auto px-2 max-w-full">
        {/* Heading */}
        <AnimateOnScroll className="text-center my-10 sm:mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Get in Touch
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Contact <span className="text-gradient-green">Us</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-bold">
                Start Your Journey Today
              </h3>

              <p className="text-muted-foreground">
                Move from the periphery of movement to the centre of being.
              </p>

              {[
                {
                  icon: Mail,
                  title: "Email",
                  text: "info@shadyukthayog.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  text: "+91 72004 48918",
                },
                {
                  icon: MapPin,
                  title: "Platform",
                  text: "Live Online – Global Access",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 bg-secondary rounded-xl"
                >
                  <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll animation="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="bg-secondary rounded-2xl p-8 border border-border"
            >
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-sm font-medium">Name</label>

                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium">Email</label>

                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Phone
                  </label>

                  <PhoneInput
                    country="in"
                    value={form.phone}
                    onChange={(value: string, data: any) => {
                      setForm({
                        ...form,
                        phone: value,
                        countryCode: "+" + data.dialCode,
                      });
                    }}
                    containerClass="w-full"
                    inputClass="!w-full !h-12 !rounded-lg !pl-14 !border !border-border !bg-background"
                  />
                </div>

                {/* Inquiry Dropdown */}
                <div className="relative">
                  <label className="text-sm font-medium block mb-1">
                    Inquiry Type
                  </label>

                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="w-full rounded-lg border px-4 py-3 text-sm bg-background flex items-center justify-between"
                  >
                    <span>{selected}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {open && (
                    <div className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto rounded-lg border bg-background shadow-lg">
                      {inquiryOptions.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setForm({ ...form, inquiry: option });
                            setOpen(false);
                          }}
                          className="px-4 py-2 text-sm cursor-pointer hover:bg-secondary"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message */}
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border resize-none bg-background"
                  placeholder="Tell us about your interests..."
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full text-white gradient-green py-3 rounded-lg font-semibold flex justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                {submitted && (
                  <p className="text-green-600 text-sm text-center">
                    Message sent successfully!
                  </p>
                )}
              </div>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
