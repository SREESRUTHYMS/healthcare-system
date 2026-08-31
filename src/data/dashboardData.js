// Content for the Dashboard page, structured the way healthsystemtracker.org
// structures theirs: a handful of categories, each with several "indicator"
// cards (a label, a headline stat, a blurb, and a route to a detail page).

export const CATEGORIES = [
  {
    slug: "patient-care",
    label: "Patient Care",
    blurb:
      "Most patients can register, book, and manage care online — but booking friction and no-shows are still the biggest drag on clinic throughput.",
    indicators: [
      {
        slug: "patient-registration",
        card: "Onboarding",
        title: "Patient registration",
        stat: "3 min",
        statLabel: "average signup-to-profile time",
        description:
          "Patients create a profile with personal and medical details, ready to book their first appointment immediately after signup.",
        details: [
          "Name, contact info, and insurance details captured up front.",
          "Medical history intake form pre-fills future doctor visits.",
          "Profile completeness is required before booking is unlocked.",
        ],
      },
      {
        slug: "appointment-booking",
        card: "Scheduling",
        title: "Appointment booking",
        stat: "51%",
        statLabel: "of bookings are same-day or next-day",
        description:
          "Patients search for available doctors by specialization, location, and availability, then confirm a timeslot in real time.",
        details: [
          "Live calendar pulls open slots directly from doctor schedules.",
          "Doctors can confirm, reschedule, or cancel from their console.",
          "Both sides get real-time notifications on status changes.",
        ],
      },
      {
        slug: "doctor-search",
        card: "Discovery",
        title: "Doctor search",
        stat: "42",
        statLabel: "doctors indexed by specialization",
        description:
          "A filterable directory lets patients find the right specialist by department, rating, and next available slot.",
        details: [
          "Filter by specialization, location, and language.",
          "Doctor profiles show verification status and credentials.",
          "Search results respect real-time availability.",
        ],
      },
      {
        slug: "secure-messaging",
        card: "Communication",
        title: "Secure messaging",
        stat: "24/7",
        statLabel: "asynchronous access to care team",
        description:
          "Patients communicate with doctors through secure messaging or video consultations without leaving the platform.",
        details: [
          "End-to-end encrypted threads tied to a patient's record.",
          "Optional video consultation for remote visits.",
          "Message history is retained as part of the medical record.",
        ],
      },
    ],
  },
  {
    slug: "doctor-staff",
    label: "Doctor & Staff",
    blurb:
      "Verified doctors manage their own schedule and patient load, but manual verification steps still slow down onboarding new staff.",
    indicators: [
      {
        slug: "doctor-verification",
        card: "Credentialing",
        title: "Doctor verification",
        stat: "2 days",
        statLabel: "average admin review time",
        description:
          "Doctors register and submit required documentation; admins approve or reject before the profile goes live.",
        details: [
          "License and certification upload required at registration.",
          "Admin review queue with approve/reject actions.",
          "Rejected applicants receive a reason and can resubmit.",
        ],
      },
      {
        slug: "schedule-management",
        card: "Availability",
        title: "Schedule management",
        stat: "96",
        statLabel: "appointments scheduled today, platform-wide",
        description:
          "Doctors view and manage daily schedules, including available timeslots for consultations.",
        details: [
          "Recurring availability templates by day of week.",
          "One-off blocks for holidays or personal time.",
          "Overbooking protection tied to slot duration.",
        ],
      },
      {
        slug: "record-review",
        card: "Preparation",
        title: "Patient record review",
        stat: "100%",
        statLabel: "of visits open with full patient history",
        description:
          "Doctors review patient medical records and history before consultations, and update them with diagnoses afterward.",
        details: [
          "Chronological view of past visits, labs, and prescriptions.",
          "Doctors add diagnosis and treatment plan notes post-visit.",
          "Changes are versioned and attributed to the reviewing doctor.",
        ],
      },
      {
        slug: "prescriptions-certificates",
        card: "Documentation",
        title: "Prescriptions & certificates",
        stat: "1-click",
        statLabel: "issue directly to a patient's record",
        description:
          "Doctors generate medical certificates and prescriptions that post straight to the patient's downloadable record.",
        details: [
          "Structured prescription form with dosage and duration.",
          "Digitally signed medical certificates for leave or fitness.",
          "Patients are notified the moment a document is issued.",
        ],
      },
    ],
  },
  {
    slug: "medical-records",
    label: "Medical Records",
    blurb:
      "Records are encrypted end-to-end and centralized, closing most of the historical gap between labs, doctors, and patients.",
    indicators: [
      {
        slug: "record-repository",
        card: "Storage",
        title: "Record repository",
        stat: "1",
        statLabel: "single source of truth per patient",
        description:
          "A secure and easily accessible repository holds every patient's medical records in one place.",
        details: [
          "Structured records: diagnoses, prescriptions, lab results.",
          "Full audit trail of who viewed or edited a record.",
          "Records persist across doctors and departments.",
        ],
      },
      {
        slug: "data-encryption",
        card: "Security",
        title: "Data encryption",
        stat: "AES-256",
        statLabel: "encryption at rest and in transit",
        description:
          "Secure data encryption protects sensitive health data end-to-end, in line with HIPAA-style compliance needs.",
        details: [
          "Encrypted storage for all patient health information.",
          "Role-based access control by module and record type.",
          "Session-level audit logging for compliance reporting.",
        ],
      },
      {
        slug: "lab-integration",
        card: "Integration",
        title: "Lab integration",
        stat: "Real-time",
        statLabel: "test result sync into patient records",
        description:
          "Integration with laboratory systems stores and retrieves test results directly inside the patient's record.",
        details: [
          "Lab orders placed directly from a doctor's console.",
          "Results post automatically once processed externally.",
          "Patients are notified when new results are available.",
        ],
      },
      {
        slug: "download-reports",
        card: "Self-service",
        title: "Downloadable reports",
        stat: "PDF",
        statLabel: "exportable records, prescriptions, and reports",
        description:
          "Patients can view and download their own health records — prescriptions, medical reports, and diagnoses.",
        details: [
          "One-click PDF export for any record or prescription.",
          "Records remain available even after a doctor visit ends.",
          "Shareable with other providers outside the platform.",
        ],
      },
    ],
  },
  {
    slug: "billing-admin",
    label: "Billing & Admin",
    blurb:
      "Online payments and insurance integration cut manual billing work, while admins keep oversight of registrations and compliance.",
    indicators: [
      {
        slug: "online-payments",
        card: "Payments",
        title: "Online payments",
        stat: "₹18.4L",
        statLabel: "billed through the platform this month",
        description:
          "Patients pay for consultations, treatments, and tests online, with confirmation sent by email and notification.",
        details: [
          "Card and UPI payment support at checkout.",
          "Payment confirmation triggers an emailed receipt.",
          "Outstanding balances are visible on the patient dashboard.",
        ],
      },
      {
        slug: "insurance-integration",
        card: "Insurance",
        title: "Insurance integration",
        stat: "External",
        statLabel: "claims and reimbursement verification",
        description:
          "Support for insurance integration handles claims and reimbursements alongside standard direct payments.",
        details: [
          "Insurance details captured at patient registration.",
          "Claims routed to external billing systems for verification.",
          "Reimbursement status reflected back on the patient bill.",
        ],
      },
      {
        slug: "invoicing",
        card: "Invoicing",
        title: "Detailed invoicing",
        stat: "Itemized",
        statLabel: "per consultation and service line",
        description:
          "Generation of detailed invoices for every consultation and service rendered, trackable by doctors and admins.",
        details: [
          "Line-item invoices per consultation, test, or treatment.",
          "Doctors and staff can track payments and outstanding bills.",
          "Invoices are attached to the patient's billing history.",
        ],
      },
      {
        slug: "admin-reports-compliance",
        card: "Oversight",
        title: "Reports & compliance",
        stat: "HIPAA",
        statLabel: "aligned confidentiality controls",
        description:
          "Admins generate reports on admissions, appointments, and billing while ensuring compliance with healthcare regulations.",
        details: [
          "Approve or reject new doctor, patient, and staff registrations.",
          "Monitor appointment bookings and cancellations platform-wide.",
          "Export admissions, appointment, and billing reports.",
        ],
      },
    ],
  },
];

export function findIndicator(categorySlug, indicatorSlug) {
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return null;
  const indicator = category.indicators.find((i) => i.slug === indicatorSlug);
  if (!indicator) return null;
  return { category, indicator };
}
