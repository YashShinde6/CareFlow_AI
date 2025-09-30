CareFlow AI is an Agentic AI-powered discharge copilot that acts like a virtual staff member. It autonomously coordinates between departments, systems, and staff using LLM-based reasoning. 

Key capabilities: 
●	Detects discharge triggers from EHRs 
 
●	Automates checklists across staff 
 
●	Notifies stakeholders (staff, family, pharmacy, billing) via WhatsApp/SMS/Email APIs 
 
●	Generates AI-powered discharge summaries using GPT-4o/Claude 3 
 
●	Provides real-time dashboards for hospital managers to track bottlenecks 
 
Result: Discharges are done in minutes, not hours—freeing beds faster and improving patient experience. 


Workflow Example 
1.	Doctor marks a patient “fit for discharge” in EHR 
 
2.	CareFlow AI detects trigger → launches discharge workflow 
 
3.	Nurse tasks auto-assigned (IV removal, vitals check) 
 
4.	Pharmacy auto-alerted for final meds 
 
5.	Billing system notified → generates final bill & insurance claim 
 
6.	Patient relatives auto-notified via WhatsApp 
 
7.	Transport scheduled automatically 
 
8.	AI generates discharge summary → Doctor approves → Auto-saved to EHR 
 
9.	Bed marked as “available” → New patient allocated instantly 

Tech Stack 
●	AI/LLM: GPT-4o, Claude 3, LangChain 
 
●	Frameworks: FastAPI (backend), Streamlit/React (frontend) 
 
●	Databases: PostgreSQL / MongoDB for logs & patient discharge data 
 
●	Messaging APIs: Twilio, WhatsApp Cloud API, SMS gateways 
 
●	Cloud/Infra: Azure Health Data Services / AWS HealthLake for compliance 
 
●	Monitoring: Prometheus + Grafana dashboards 

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js >= 18.x
- npm >= 9.x (or yarn)
- Git

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/YashShinde6/CareFlow_AI.git
cd CareFlow_AI

##Install Dependencies
npm install
npm install -D autoprefixer postcss tailwindcss@3
npx i @splinetool/runtime
npx i @splinetool/react-spline


