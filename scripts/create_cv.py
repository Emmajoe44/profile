from pathlib import Path
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib import colors

OUTPUT_PATH = Path('public/cv/Emmanuel-Joseph-CV.pdf')
OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

styles = {
    'title': ParagraphStyle(
        name='Title',
        fontName='Helvetica-Bold',
        fontSize=26,
        leading=30,
        textColor=colors.HexColor('#111827'),
        spaceAfter=6,
    ),
    'subtitle': ParagraphStyle(
        name='Subtitle',
        fontName='Helvetica',
        fontSize=14,
        leading=18,
        textColor=colors.HexColor('#4b5563'),
        spaceAfter=12,
    ),
    'heading': ParagraphStyle(
        name='Heading',
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=14,
        textColor=colors.HexColor('#1f2937'),
        spaceBefore=14,
        spaceAfter=6,
    ),
    'body': ParagraphStyle(
        name='Body',
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#374151'),
        spaceAfter=6,
    ),
    'bullet': ParagraphStyle(
        name='Bullet',
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        leftIndent=12,
        bulletIndent=0,
        bulletFontName='Helvetica',
        bulletFontSize=10,
        textColor=colors.HexColor('#374151'),
        spaceAfter=2,
    ),
}

profile = {
    'name': 'Emmanuel Joseph',
    'title': 'Website & ERP Developer',
    'contact': [
        'Email: emmajoe220@gmail.com',
        'WhatsApp: +211920414178',
        'GitHub: https://github.com/Emmajoe44',
        'LinkedIn: https://www.linkedin.com/in/emmanuel-joseph',
    ],
}

summary = (
    'Experienced full-stack developer delivering polished web applications, ERP solutions, and business systems. '
    'I build user-focused software for hospitals, pharmacies, retail, and business operations with strong UI, secure APIs, and data-driven workflows.'
)

expertise = [
    'Custom ERP and business automation platforms',
    'Responsive React and Tailwind interfaces',
    'REST API integration and backend services',
    'Database design, reporting, and analytics',
    'Hospital management, pharmacy systems, and POS solutions',
]

projects = [
    ('Pharmacy Management System',
     'Delivered inventory control, billing, prescription tracking, and reporting for pharmacy clients.'),
    ('Hospital Management System',
     'Built patient workflows, appointment scheduling, billing, and clinical operations functionality.'),
    ('Ticketing System',
     'Developed support ticket tracking, SLA management, and analytics dashboards.'),
]

experience = [
    ('2025 - Present', 'Independent Consultant', 'Senior Web & ERP Developer',
     'Delivered custom ERP and web app solutions for business automation, reporting, and client operations.'),
    ('2023 - 2025', 'Digital Systems Lab', 'Lead Software Engineer',
     'Led development of enterprise web applications, API platforms, and dashboards for operations and analytics.'),
    ('2021 - 2023', 'Creative Agency', 'Full-Stack Developer',
     'Created client-facing websites, portals, and backend services with an emphasis on usability and reliable performance.'),
]

education = [
    'Professional Web Development — Tech Academy',
    'Database Design & MySQL — Cloud University',
    'Software Architecture — Enterprise Learning',
]

availability = (
    'Open to new web development and ERP projects. Ready to deliver fast, secure, and user-friendly business systems.'
)

story = []
story.append(Paragraph(profile['name'], styles['title']))
story.append(Paragraph(profile['title'], styles['subtitle']))
for contact_line in profile['contact']:
    story.append(Paragraph(contact_line, styles['body']))
story.append(Spacer(1, 12))
story.append(HRFlowable(color=colors.HexColor('#e2e8f0'), thickness=1, width='100%'))
story.append(Spacer(1, 12))
story.append(Paragraph('Professional Summary', styles['heading']))
story.append(Paragraph(summary, styles['body']))
story.append(Spacer(1, 12))
story.append(Paragraph('Core Expertise', styles['heading']))
for item in expertise:
    story.append(Paragraph(item, styles['bullet'], bulletText='•'))
story.append(Spacer(1, 12))
story.append(Paragraph('Selected Projects', styles['heading']))
for title, detail in projects:
    story.append(Paragraph(f'<b>{title}</b>', styles['body']))
    story.append(Paragraph(detail, styles['bullet'], bulletText='•'))
story.append(Spacer(1, 12))
story.append(Paragraph('Professional Experience', styles['heading']))
for dates, company, role, detail in experience:
    story.append(Paragraph(f'<b>{dates} | {company}</b>', styles['body']))
    story.append(Paragraph(f'<i>{role}</i>', styles['body']))
    story.append(Paragraph(detail, styles['bullet'], bulletText='•'))
story.append(Spacer(1, 12))
story.append(Paragraph('Education & Certifications', styles['heading']))
for item in education:
    story.append(Paragraph(item, styles['bullet'], bulletText='•'))
story.append(Spacer(1, 12))
story.append(Paragraph('Availability', styles['heading']))
story.append(Paragraph(availability, styles['body']))

pdf_doc = SimpleDocTemplate(
    str(OUTPUT_PATH),
    pagesize=LETTER,
    rightMargin=72,
    leftMargin=72,
    topMargin=72,
    bottomMargin=72,
)
pdf_doc.build(story)

print(f'Wrote CV PDF to {OUTPUT_PATH} ({OUTPUT_PATH.stat().st_size} bytes)')
