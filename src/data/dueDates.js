export const dueDates = [
  {
    category: 'GST',
    color: 'blue',
    icon: 'FileText',
    dates: [
      { form: 'GSTR-1', dueDate: '11th of every month', description: 'Monthly outward supply details', applicability: 'Turnover > ₹5 Cr (monthly filers)' },
      { form: 'GSTR-1 (IFF)', dueDate: '13th of Month 1 & 2', description: 'Invoice Furnishing Facility', applicability: 'QRMP scheme taxpayers' },
      { form: 'GSTR-3B', dueDate: '20th of every month', description: 'Monthly summary return & payment', applicability: 'Turnover > ₹5 Cr' },
      { form: 'GSTR-3B (QRMP)', dueDate: '22nd / 24th quarterly', description: 'Quarterly return & payment', applicability: 'QRMP scheme taxpayers' },
      { form: 'GSTR-9', dueDate: '31st December', description: 'Annual GST return', applicability: 'All regular registered taxpayers' },
      { form: 'GSTR-9C', dueDate: '31st December', description: 'Reconciliation statement (audit)', applicability: 'Turnover > ₹5 Cr' },
    ],
  },
  {
    category: 'TDS / TCS',
    color: 'green',
    icon: 'Calculator',
    dates: [
      { form: 'TDS/TCS Payment', dueDate: '7th of every month', description: 'Deposit TDS/TCS deducted in previous month', applicability: 'All deductors' },
      { form: 'TDS Payment (March)', dueDate: '30th April', description: 'TDS deducted in March to be deposited', applicability: 'All deductors' },
      { form: '24Q / 26Q Q1', dueDate: '31st July', description: 'TDS return for April–June quarter', applicability: 'All deductors' },
      { form: '24Q / 26Q Q2', dueDate: '31st October', description: 'TDS return for July–September quarter', applicability: 'All deductors' },
      { form: '24Q / 26Q Q3', dueDate: '31st January', description: 'TDS return for October–December quarter', applicability: 'All deductors' },
      { form: '24Q / 26Q Q4', dueDate: '31st May', description: 'TDS return for January–March quarter', applicability: 'All deductors' },
    ],
  },
  {
    category: 'Income Tax',
    color: 'yellow',
    icon: 'IndianRupee',
    dates: [
      { form: 'Advance Tax (1st)', dueDate: '15th June', description: '15% of estimated annual tax', applicability: 'All assessees (not 44AD/44ADA)' },
      { form: 'Advance Tax (2nd)', dueDate: '15th September', description: '45% of estimated annual tax', applicability: 'All assessees' },
      { form: 'Advance Tax (3rd)', dueDate: '15th December', description: '75% of estimated annual tax', applicability: 'All assessees' },
      { form: 'Advance Tax (4th)', dueDate: '15th March', description: '100% of estimated annual tax', applicability: 'All assessees' },
      { form: 'ITR Filing', dueDate: '31st July', description: 'Income Tax Return — non-audit cases', applicability: 'Individuals, HUF, firms (non-audit)' },
      { form: 'ITR Filing (Audit)', dueDate: '31st October', description: 'Income Tax Return — audit cases', applicability: 'Companies, audit-required assesses' },
      { form: 'Tax Audit Report', dueDate: '30th September', description: 'Form 3CA/3CB/3CD submission', applicability: 'All audit cases' },
    ],
  },
  {
    category: 'ROC / MCA',
    color: 'purple',
    icon: 'Building2',
    dates: [
      { form: 'MGT-7 / MGT-7A', dueDate: '60 days from AGM', description: 'Annual Return of Company (usually by 30th November)', applicability: 'All registered companies' },
      { form: 'AOC-4', dueDate: '30 days from AGM', description: 'Financial Statements filing (usually by 29th October)', applicability: 'All registered companies' },
      { form: 'LLP Form 11', dueDate: '30th May', description: 'Annual Return for LLP', applicability: 'All LLPs' },
      { form: 'LLP Form 8', dueDate: '30th October', description: 'Statement of Account & Solvency for LLP', applicability: 'All LLPs' },
      { form: 'DIR-3 KYC', dueDate: '30th September', description: 'Director KYC annual filing', applicability: 'All active DINs' },
    ],
  },
  {
    category: 'PF / ESIC',
    color: 'red',
    icon: 'Users',
    dates: [
      { form: 'EPF Payment', dueDate: '15th of every month', description: 'Provident Fund contribution payment for previous month', applicability: 'Employers with 20+ employees' },
      { form: 'ESIC Payment', dueDate: '15th of every month', description: 'Employee State Insurance contribution payment', applicability: 'Employers with 10+ employees' },
      { form: 'EPF Annual Return', dueDate: '25th April', description: 'Annual PF return (Form 3A, 6A)', applicability: 'All EPF registered employers' },
    ],
  },
]
