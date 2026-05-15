export const faqs = [
  {
    id: 1,
    question: 'Is TDS applicable on internet service charges?',
    answer: 'No. After the amendment in Finance Act 2020, TDS under Section 194J is not applicable on payments made to internet service providers (ISPs) for standard internet connectivity. However, if the ISP also provides technical services beyond mere connectivity, TDS may be applicable at 2% (non-technical) or 10% (technical/professional) depending on the nature of service.',
    category: 'TDS',
  },
  {
    id: 2,
    question: 'When is PF (Provident Fund) applicable to a business?',
    answer: 'PF registration under the Employees\' Provident Funds Act, 1952 is mandatory for establishments employing 20 or more employees. Employees drawing wages up to ₹15,000 per month must mandatorily be covered. Both employer (12% of basic+DA) and employee (12%) contribute. Once registered, PF continues to apply even if headcount falls below 20.',
    category: 'Compliance',
  },
  {
    id: 3,
    question: 'Is GST applicable on services provided by freelancers?',
    answer: 'Yes, GST is applicable on services provided by freelancers if their annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states). Freelancers must register for GST, collect 18% GST on their invoices, and file monthly/quarterly returns. Freelancers providing services to foreign clients may be eligible for zero-rated export benefits.',
    category: 'GST',
  },
  {
    id: 4,
    question: 'How to revise a TDS return after submission?',
    answer: 'TDS returns can be revised using the TRACES portal (tracess.gov.in). You need to download the consolidated file (FUV) for the relevant quarter, make corrections in the TDS RPU (Return Preparation Utility) software, generate a new FUV file, and upload it on TRACES. Common corrections include adding missing challans, updating PAN details, and correcting deduction amounts.',
    category: 'TDS',
  },
  {
    id: 5,
    question: 'Which TDS section applies to payments for SEO services?',
    answer: 'Payments for SEO (Search Engine Optimization) services are typically covered under Section 194J at 10% as these are technical/professional services. However, if the nature of the service is purely a contract for work, Section 194C (1% for individuals, 2% for others) may apply. The distinction lies in whether specialized skills and expertise are involved.',
    category: 'TDS',
  },
  {
    id: 6,
    question: 'Can a credit note issued to a customer reduce GST liability?',
    answer: 'Yes. A registered supplier can issue a credit note and reduce GST liability only if: (1) the recipient reverses the ITC attributable to the credit note, (2) the credit note is issued within the earlier of the due date of September GSTR-1 of the next year or date of filing the annual return. The credit note must be reported in GSTR-1 under Table 9B.',
    category: 'GST',
  },
  {
    id: 7,
    question: 'What is the GST rate on restaurant services?',
    answer: 'Restaurant services are taxed at 5% GST without Input Tax Credit (ITC). This applies to standalone restaurants, AC or non-AC. However, restaurants located in hotels with room tariff above ₹7,500 per night are taxed at 18% with ITC. Online food delivery platforms collect 5% GST on behalf of the restaurant under Section 9(5) of CGST Act.',
    category: 'GST',
  },
  {
    id: 8,
    question: 'Is income tax applicable on agricultural income?',
    answer: 'Agricultural income is exempt from income tax under Section 10(1). However, it is included for rate purposes (partial integration) if your non-agricultural income exceeds the basic exemption limit. Capital gains on agricultural land situated in rural areas are also exempt. Urban agricultural land sales are taxable under capital gains.',
    category: 'Income Tax',
  },
  {
    id: 9,
    question: 'What documents are required for GST registration?',
    answer: 'For proprietorship: PAN card, Aadhaar, photo, bank statement, and proof of business place. For company/LLP: PAN of entity, Certificate of Incorporation, Memorandum of Association, PAN/Aadhaar of directors, and proof of principal place of business. Digital signature of authorized signatory is required for companies and LLPs.',
    category: 'GST',
  },
  {
    id: 10,
    question: 'What is the new tax regime? Should I opt for it?',
    answer: 'The new tax regime (introduced in Budget 2020, made default from FY 2023-24) offers lower slab rates but removes most deductions like 80C, HRA, LTA, and home loan interest. The old regime allows these deductions. You should opt for the new regime if your deductions are less than ~₹3.5 lakhs annually. Salaried employees can switch between regimes each year; businesses can switch only once.',
    category: 'Income Tax',
  },
  {
    id: 11,
    question: 'When is ESIC applicable to a business?',
    answer: 'ESIC (Employee State Insurance Corporation) is mandatory for non-seasonal factories and establishments employing 10 or more persons (20 in some states). Employees earning wages up to ₹21,000/month (₹25,000 for persons with disabilities) must be covered. The employer contributes 3.25% and the employee contributes 0.75% of gross wages.',
    category: 'Compliance',
  },
  {
    id: 12,
    question: 'What is the penalty for late filing of GSTR-3B?',
    answer: 'Late filing of GSTR-3B attracts a late fee of ₹50/day (₹25 CGST + ₹25 SGST) for returns with tax liability, and ₹20/day for nil returns. Additionally, interest at 18% per annum is charged on the unpaid tax from the due date. The late fee is capped at ₹10,000 per return (₹5,000 CGST + ₹5,000 SGST) for turnover above ₹1.5 crores.',
    category: 'GST',
  },
  {
    id: 13,
    question: 'Can I claim ITC on purchases made before GST registration?',
    answer: 'Yes, under Section 18(1)(a) of CGST Act, a person who applies for GST registration within 30 days of becoming liable can claim ITC on inputs held in stock on the date immediately preceding the date of registration. ITC on capital goods is limited to 5 years from the date of invoice. You must declare these stocks in Form GST REG-01.',
    category: 'GST',
  },
  {
    id: 14,
    question: 'What is the TDS rate on rent under Section 194I?',
    answer: 'TDS on rent under Section 194I: 10% for rent of plant, machinery, or equipment; 10% for rent of land or building or furniture. TDS is deducted if the annual rent exceeds ₹2,40,000. Individuals and HUFs whose turnover does not exceed the tax audit limit are not required to deduct TDS on rent. From FY 2024-25, Sec 194IB applies at 5% for individuals paying rent exceeding ₹50,000/month.',
    category: 'TDS',
  },
  {
    id: 15,
    question: 'Is it mandatory to link PAN with Aadhaar?',
    answer: 'Yes. PAN-Aadhaar linking was mandatory by 30th June 2023. If not linked, your PAN becomes inoperative. An inoperative PAN means: no ITR filing, higher TDS (20%) and TCS deducted, no refunds processed. You can still link by paying a penalty fee of ₹1,000 and submitting the linking request on the income tax portal.',
    category: 'Income Tax',
  },
]

export const faqCategories = ['All', 'GST', 'Income Tax', 'TDS', 'Compliance']
