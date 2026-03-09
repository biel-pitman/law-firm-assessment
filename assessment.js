/* Archificials Law Firm AI Readiness Assessment
 * Self-injecting widget — hosted on GitHub, served via jsDelivr
 * Load with: <script src="https://cdn.jsdelivr.net/gh/YOUR_ORG/law-firm-assessment@main/assessment.js"></script>
 * Updated: 2026-03-09
 */
(function(){
'use strict';

// --- Inject styles ---
var _s=document.createElement('style');
_s.textContent=`
#ach-af *{box-sizing:border-box;margin:0;padding:0}#ach-af{background:#ebebeb;color:#111;font-family:'Plus Jakarta Sans',sans-serif;display:flex;flex-direction:column;width:100vw;margin-left:calc(-50vw + 50%);align-self:flex-start;position:relative}#ach-af .af-progress-track{position:sticky;top:0;height:2px;background:#d5d5d5;z-index:10}#ach-af .af-progress-fill{height:100%;background:#e27308;transition:width .4s ease;width:0}#ach-af .af-header{display:none}#ach-af .af-stage{display:flex;align-items:center;justify-content:center;padding:60px 40px 80px}#ach-af .af-slide{display:none;max-width:680px;width:100%}#ach-af .af-slide.active{display:block;animation:af-slide-in 0.45s cubic-bezier(0.22,1,0.36,1) forwards}#ach-af .af-slide.exit{animation:af-slide-out 0.28s cubic-bezier(0.4,0,1,1) forwards}@keyframes af-slide-in{from{opacity:0;transform:translateY(18px);filter:blur(3px)}to{opacity:1;transform:translateY(0);filter:blur(0)}}@keyframes af-slide-out{from{opacity:1;transform:translateY(0);filter:blur(0)}to{opacity:0;transform:translateY(-16px);filter:blur(3px)}}#ach-af .af-section-tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#e27308;border:1px solid rgba(226,115,8,0.3);border-radius:2px;padding:3px 9px;margin-bottom:28px}#ach-af .af-question{font-size:clamp(20px,3vw,28px);font-weight:700;line-height:1.3;color:#111;margin-bottom:10px}#ach-af .af-hint{font-size:14px;line-height:1.6;color:#777;margin-bottom:36px}#ach-af .af-options{display:flex;flex-direction:column;gap:10px;margin-bottom:40px}#ach-af .af-option{display:flex;align-items:flex-start;gap:14px;padding:16px 20px;background:#fff;border:1px solid #d8d8d8;border-radius:4px;cursor:pointer;transition:border-color 0.2s,background 0.2s,box-shadow 0.2s;user-select:none}#ach-af .af-option:hover{border-color:#bbb;background:#f7f7f7;box-shadow:0 2px 8px rgba(0,0,0,0.06)}#ach-af .af-option.selected{border-color:#e27308;background:rgba(226,115,8,0.05)}#ach-af .af-option-key{flex-shrink:0;width:24px;height:24px;border:1px solid #ccc;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#aaa;margin-top:1px;transition:background 0.2s,border-color 0.2s,color 0.2s}#ach-af .af-option.selected .af-option-key{background:#e27308;border-color:#e27308;color:#fff}#ach-af .af-option-text{font-size:15px;line-height:1.5;color:#444}#ach-af .af-option.selected .af-option-text{color:#111}#ach-af .af-scale{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap}#ach-af .af-scale-btn{width:52px;height:52px;border:1px solid #d5d5d5;border-radius:4px;background:#fff;color:#777;font-size:16px;font-weight:700;cursor:pointer;transition:all .2s;font-family:'Plus Jakarta Sans',sans-serif}#ach-af .af-scale-btn:hover{border-color:#aaa;color:#111;box-shadow:0 2px 8px rgba(0,0,0,0.06)}#ach-af .af-scale-btn.selected{border-color:#e27308;background:rgba(226,115,8,0.07);color:#e27308}#ach-af .af-scale-labels{display:flex;justify-content:space-between;margin-bottom:36px;max-width:330px}#ach-af .af-scale-label{font-size:11px;color:#999;letter-spacing:0.05em}#ach-af .af-text-input{width:100%;background:transparent;border:none;border-bottom:2px solid #d0d0d0;color:#111;font-size:18px;font-family:'Plus Jakarta Sans',sans-serif;padding:12px 0;outline:none;transition:border-color 0.2s;margin-bottom:40px}#ach-af .af-text-input:focus{border-color:#e27308}#ach-af .af-text-input::placeholder{color:#bbb}#ach-af .af-textarea{width:100%;background:#fff;border:1px solid #d5d5d5;border-radius:4px;color:#111;font-size:15px;font-family:'Plus Jakarta Sans',sans-serif;padding:16px 18px;outline:none;resize:vertical;min-height:120px;transition:border-color 0.2s,box-shadow 0.2s;margin-bottom:40px;line-height:1.6}#ach-af .af-textarea:focus{border-color:#e27308;box-shadow:0 0 0 3px rgba(226,115,8,0.08)}#ach-af .af-textarea::placeholder{color:#bbb}#ach-af .af-nav{display:flex;align-items:center;gap:16px}#ach-af .af-btn-next{display:inline-flex;align-items:center;gap:10px;background:#e27308;color:#fff;font-size:14px;font-weight:700;letter-spacing:0.06em;padding:14px 28px;border:none;border-radius:3px;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;transition:background 0.2s,transform 0.15s,box-shadow 0.2s;box-shadow:0 2px 10px rgba(226,115,8,0.25)}#ach-af .af-btn-next:hover{background:#c96500;box-shadow:0 4px 16px rgba(226,115,8,0.35)}#ach-af .af-btn-next:active{transform:scale(0.98)}#ach-af .af-btn-next svg{transition:transform 0.2s}#ach-af .af-btn-next:hover svg{transform:translateX(3px)}#ach-af .af-btn-back{background:none;border:none;color:#aaa;font-size:13px;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;padding:8px;transition:color 0.2s}#ach-af .af-btn-back:hover{color:#111}#ach-af .af-key-hint{font-size:11px;color:#bbb;margin-left:auto}#ach-af .af-key-hint kbd{display:inline-block;border:1px solid #d5d5d5;border-radius:2px;padding:1px 5px;font-size:10px;color:#aaa;font-family:inherit}#ach-af .af-required{color:#e27308;margin-left:3px}#ach-af .af-intro{max-width:680px;width:100%}#ach-af .af-intro-eyebrow{font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#e27308;margin-bottom:28px;display:block}#ach-af .af-intro-headline{font-size:clamp(28px,4vw,46px);font-weight:800;line-height:1.1;color:#111;margin-bottom:20px}#ach-af .af-intro-body{font-size:16px;line-height:1.75;color:#666;margin-bottom:16px;max-width:560px}#ach-af .af-intro-meta{display:flex;gap:32px;margin-bottom:48px;margin-top:32px}#ach-af .af-intro-meta-item{display:flex;flex-direction:column;gap:4px}#ach-af .af-intro-meta-label{font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#999}#ach-af .af-intro-meta-value{font-size:15px;font-weight:600;color:#111}#ach-af .af-confirm{max-width:600px;width:100%;text-align:center}#ach-af .af-confirm-icon{width:64px;height:64px;border-radius:50%;background:rgba(226,115,8,0.08);border:1px solid rgba(226,115,8,0.3);display:flex;align-items:center;justify-content:center;margin:0 auto 32px}#ach-af .af-confirm-headline{font-size:30px;font-weight:800;color:#111;margin-bottom:16px}#ach-af .af-confirm-body{font-size:16px;line-height:1.75;color:#666;margin-bottom:48px}#ach-af .af-preview-card{background:#fff;border:1px solid #e0e0e0;border-radius:6px;padding:32px;text-align:left;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06)}#ach-af .af-preview-card::before{content:'PREVIEW';position:absolute;top:14px;right:14px;font-size:9px;font-weight:700;letter-spacing:0.16em;color:#e27308;background:rgba(226,115,8,0.08);border:1px solid rgba(226,115,8,0.25);border-radius:2px;padding:2px 7px}#ach-af .af-preview-title{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#aaa;margin-bottom:20px}#ach-af .af-score-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px}#ach-af .af-score-block{background:#f5f5f5;border:1px solid #e5e5e5;border-radius:4px;padding:16px}#ach-af .af-score-label{font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#999;margin-bottom:8px}#ach-af .af-score-bar-track{height:4px;background:#e5e5e5;border-radius:2px;margin-bottom:6px;overflow:hidden}#ach-af .af-score-bar-fill{height:100%;background:#e27308;border-radius:2px;opacity:0.35}#ach-af .af-score-value{font-size:22px;font-weight:800;color:#ccc}#ach-af .af-preview-note{font-size:13px;line-height:1.6;color:#999;border-top:1px solid #e5e5e5;padding-top:20px}#ach-af .af-preview-note strong{color:#666}#ach-af .af-error{font-size:12px;color:#e27308;margin-top:-32px;margin-bottom:24px;display:none}#ach-af .af-error.visible{display:block}#ach-af .af-spinner{width:18px;height:18px;border:2px solid rgba(0,0,0,0.12);border-top-color:#111;border-radius:50%;animation:af-spin 0.7s linear infinite;display:none}#ach-af .af-spinner.visible{display:block}@keyframes af-spin{to{transform:rotate(360deg)}}#ach-af .af-score-value.live{color:#111}#ach-af .af-score-bar-fill.live{opacity:1;transition:width 0.8s cubic-bezier(0.22,1,0.36,1)}#ach-af .af-preview-card.scored::before{content:'LIVE';background:rgba(34,197,94,0.08);border-color:rgba(34,197,94,0.3);color:#16a34a}#ach-af .af-overall-score{text-align:center;padding:16px 0 20px;border-bottom:1px solid #e5e5e5;margin-bottom:20px}#ach-af .af-overall-num{font-size:52px;font-weight:800;color:#e27308;line-height:1}#ach-af .af-overall-label{font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#999;margin-top:4px}#ach-af .af-score-insight{font-size:12px;line-height:1.5;color:#888;margin-top:6px;font-style:italic}#ach-af .af-opportunities{margin-top:20px;border-top:1px solid #e5e5e5;padding-top:16px}#ach-af .af-opp-title{font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#aaa;margin-bottom:10px}#ach-af .af-opp-item{font-size:13px;line-height:1.6;color:#555;padding:5px 0 5px 18px;position:relative}#ach-af .af-opp-item::before{content:'→';position:absolute;left:0;color:#e27308;font-weight:700}@media (max-width:600px){#ach-af .af-stage{padding:40px 24px 60px}#ach-af .af-score-row{grid-template-columns:1fr}#ach-af .af-intro-meta{flex-wrap:wrap;gap:20px}#ach-af .af-scale{gap:8px}#ach-af .af-scale-btn{width:44px;height:44px;font-size:14px}}#ach-af .af-score-tier{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:2px;padding:3px 9px;margin-top:8px}#ach-af .af-score-tier.opp{background:rgba(226,115,8,.1);color:#c96500;border:1px solid rgba(226,115,8,.3)}#ach-af .af-score-tier.mid{background:rgba(234,179,8,.1);color:#a16207;border:1px solid rgba(234,179,8,.3)}#ach-af .af-score-tier.adv{background:rgba(34,197,94,.1);color:#15803d;border:1px solid rgba(34,197,94,.3)}#ach-af .af-score-context{font-size:12px;color:#888;margin-top:8px;line-height:1.5}
#ach-af .rc{transition:all .9s cubic-bezier(.22,1,.36,1)}`;
document.head.appendChild(_s);

// --- Inject HTML ---
var _w=document.createElement('div');
_w.innerHTML=`<!-- CONFIGURE THESE TWO VALUES AFTER AIRTABLE SETUP -->


<div id="ach-af">
<div class="af-progress-track">
<div class="af-progress-fill" id="af-progress"></div>
</div>
<div class="af-header">
<div class="af-logo">Archif<span>i</span>cials</div>
<div class="af-step-counter" id="af-counter"></div>
</div>
<div class="af-stage" id="af-stage">
<div class="af-intro" id="slide-intro">
<span class="af-intro-eyebrow">Law Firm AI Readiness</span>
<h1 class="af-intro-headline">How ready is<br>your firm for AI?</h1>
<p class="af-intro-body">
This assessment takes 6-8 minutes. We evaluate your firm across four dimensions:
operational efficiency, client acquisition, digital visibility, and AI maturity.
You'll receive a personalized readiness report with your highest-leverage opportunities.
</p>
<div class="af-intro-meta">
<div class="af-intro-meta-item">
<span class="af-intro-meta-label">Time required</span>
<span class="af-intro-meta-value">6-8 minutes</span>
</div>
<div class="af-intro-meta-item">
<span class="af-intro-meta-label">Questions</span>
<span class="af-intro-meta-value">24 questions</span>
</div>
<div class="af-intro-meta-item">
<span class="af-intro-meta-label">Your report</span>
<span class="af-intro-meta-value">Within 24 hours</span>
</div>
</div>
<button class="af-btn-next" onclick="startForm()">
Start assessment →
</button>
</div>
<div class="af-slide" id="slide-0" data-key="firm_name" data-type="text" data-required="true">
<span class="af-section-tag">Firm Profile</span>
<div class="af-question">What is the name of your firm?<span class="af-required">*</span></div>
<input class="af-text-input" type="text" placeholder="e.g. Smith & Associates LLP" autocomplete="organization">
<div class="af-error" id="err-0">Please enter your firm name.</div>
<div class="af-nav">
<button class="af-btn-next">Next →</button>
<span class="af-key-hint">press <kbd>Enter ↵</kbd></span>
</div>
</div>
<div class="af-slide" id="slide-1" data-key="contact_name" data-type="text" data-required="true">
<span class="af-section-tag">Firm Profile</span>
<div class="af-question">Your name and role<span class="af-required">*</span></div>
<input class="af-text-input" type="text" placeholder="e.g. Jane Smith, Managing Partner" autocomplete="name">
<div class="af-error" id="err-1">Please enter your name.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
<span class="af-key-hint">press <kbd>Enter ↵</kbd></span>
</div>
</div>
<div class="af-slide" id="slide-2" data-key="contact_email" data-type="email" data-required="true">
<span class="af-section-tag">Firm Profile</span>
<div class="af-question">Your email address<span class="af-required">*</span></div>
<div class="af-hint">We'll send your personalized assessment report here.</div>
<input class="af-text-input" type="email" placeholder="you@yourfirm.com" autocomplete="email">
<div class="af-error" id="err-2">Please enter a valid email address.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
<span class="af-key-hint">press <kbd>Enter ↵</kbd></span>
</div>
</div>
<div class="af-slide" id="slide-3" data-key="firm_size" data-type="radio" data-required="true">
<span class="af-section-tag">Firm Profile</span>
<div class="af-question">How many attorneys are at your firm?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Solo (1)"><div class="af-option-key">A</div><div class="af-option-text">Solo (1)</div></div>
<div class="af-option" data-value="Small (2-5)"><div class="af-option-key">B</div><div class="af-option-text">Small (2-5)</div></div>
<div class="af-option" data-value="Mid-size (6-20)"><div class="af-option-key">C</div><div class="af-option-text">Mid-size (6-20)</div></div>
<div class="af-option" data-value="Large (21-50)"><div class="af-option-key">D</div><div class="af-option-text">Large (21-50)</div></div>
<div class="af-option" data-value="Enterprise (50+)"><div class="af-option-key">E</div><div class="af-option-text">Enterprise (50+)</div></div>
</div>
<div class="af-error" id="err-3">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-4" data-key="practice_mix" data-type="radio" data-required="true">
<span class="af-section-tag">Firm Profile</span>
<div class="af-question">What best describes your primary practice?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Personal Injury / Mass Tort"><div class="af-option-key">A</div><div class="af-option-text">Personal injury or mass tort (contingency-based)</div></div>
<div class="af-option" data-value="Commercial Litigation"><div class="af-option-key">B</div><div class="af-option-text">Commercial litigation (business disputes, contracts)</div></div>
<div class="af-option" data-value="Criminal Defense"><div class="af-option-key">C</div><div class="af-option-text">Criminal defense, Title IX, or civil rights</div></div>
<div class="af-option" data-value="IP / Technology"><div class="af-option-key">D</div><div class="af-option-text">Intellectual property, technology, or cybersecurity</div></div>
<div class="af-option" data-value="Employment Law"><div class="af-option-key">E</div><div class="af-option-text">Employment law, labor, or workplace disputes</div></div>
<div class="af-option" data-value="Estate Planning / Trusts"><div class="af-option-key">F</div><div class="af-option-text">Estate planning, trusts, wills, or probate</div></div>
<div class="af-option" data-value="Real Estate / Transactional"><div class="af-option-key">G</div><div class="af-option-text">Real estate, transactional, or eminent domain</div></div>
<div class="af-option" data-value="Multi-Practice / General Counsel"><div class="af-option-key">H</div><div class="af-option-text">Multi-practice or general counsel work</div></div>
</div>
<div class="af-error" id="err-4">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-5" data-key="tech_stack" data-type="radio" data-required="true">
<span class="af-section-tag">Technology</span>
<div class="af-question">How would you describe your current technology setup?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Basic (email, Word, spreadsheets)"><div class="af-option-key">A</div><div class="af-option-text">Basic: email, Word, and spreadsheets mostly</div></div>
<div class="af-option" data-value="Case management software (Clio, MyCase, etc.)"><div class="af-option-key">B</div><div class="af-option-text">Case management software (Clio, MyCase, PracticePanther, etc.)</div></div>
<div class="af-option" data-value="Full stack (case mgmt + billing + client portal)"><div class="af-option-key">C</div><div class="af-option-text">Full stack: case management, billing, and client portal integrated</div></div>
<div class="af-option" data-value="Custom / enterprise tools"><div class="af-option-key">D</div><div class="af-option-text">Custom or enterprise-grade tools</div></div>
</div>
<div class="af-error" id="err-5">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-6" data-key="ai_experience" data-type="radio" data-required="true">
<span class="af-section-tag">Technology</span>
<div class="af-question">Has your firm explored or used any AI tools so far?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="No: not explored yet"><div class="af-option-key">A</div><div class="af-option-text">No: we haven't explored this yet</div></div>
<div class="af-option" data-value="Informally (attorneys using ChatGPT personally)"><div class="af-option-key">B</div><div class="af-option-text">Informally: some attorneys use ChatGPT or similar on their own</div></div>
<div class="af-option" data-value="Piloted one or two tools"><div class="af-option-key">C</div><div class="af-option-text">We've piloted one or two tools with mixed results</div></div>
<div class="af-option" data-value="Actively using AI tools in workflow"><div class="af-option-key">D</div><div class="af-option-text">We're actively using AI tools as part of our workflow</div></div>
</div>
<div class="af-error" id="err-6">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-7" data-key="biggest_bottleneck" data-type="radio" data-required="true">
<span class="af-section-tag">Operations</span>
<div class="af-question">Where does work slow down most at your firm?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Document review (medical records, discovery, depositions)"><div class="af-option-key">A</div><div class="af-option-text">Document review: medical records, discovery, depositions</div></div>
<div class="af-option" data-value="Legal research"><div class="af-option-key">B</div><div class="af-option-text">Legal research</div></div>
<div class="af-option" data-value="Client communication and status updates"><div class="af-option-key">C</div><div class="af-option-text">Client communication and case status updates</div></div>
<div class="af-option" data-value="Intake and onboarding"><div class="af-option-key">D</div><div class="af-option-text">Intake and client onboarding</div></div>
<div class="af-option" data-value="Drafting motions, briefs, and correspondence"><div class="af-option-key">E</div><div class="af-option-text">Drafting motions, briefs, and correspondence</div></div>
</div>
<div class="af-error" id="err-7">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-8" data-key="after_hours_intake" data-type="radio" data-required="true">
<span class="af-section-tag">Operations</span>
<div class="af-question">When someone contacts the firm outside business hours, what happens?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Lead waits until next business day"><div class="af-option-key">A</div><div class="af-option-text">They wait until the next business day</div></div>
<div class="af-option" data-value="Voicemail only"><div class="af-option-key">B</div><div class="af-option-text">Voicemail only: we follow up the next morning</div></div>
<div class="af-option" data-value="Answering service"><div class="af-option-key">C</div><div class="af-option-text">We use a third-party answering service</div></div>
<div class="af-option" data-value="24/7 coverage in place"><div class="af-option-key">D</div><div class="af-option-text">We have 24/7 coverage in place</div></div>
</div>
<div class="af-error" id="err-8">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-9" data-key="intake_speed" data-type="radio" data-required="true">
<span class="af-section-tag">Operations</span>
<div class="af-question">From first contact to signed engagement, how long does intake typically take?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Same day"><div class="af-option-key">A</div><div class="af-option-text">Same day</div></div>
<div class="af-option" data-value="1-3 days"><div class="af-option-key">B</div><div class="af-option-text">1-3 days</div></div>
<div class="af-option" data-value="4-7 days"><div class="af-option-key">C</div><div class="af-option-text">4-7 days</div></div>
<div class="af-option" data-value="More than a week"><div class="af-option-key">D</div><div class="af-option-text">More than a week</div></div>
<div class="af-option" data-value="No consistent process"><div class="af-option-key">E</div><div class="af-option-text">No consistent process: varies case by case</div></div>
</div>
<div class="af-error" id="err-9">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-10" data-key="lead_sources" data-type="radio" data-required="true">
<span class="af-section-tag">Client Acquisition</span>
<div class="af-question">Where do most of your new cases come from today?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Primarily referrals (80%+)"><div class="af-option-key">A</div><div class="af-option-text">Primarily referrals: 80% or more</div></div>
<div class="af-option" data-value="Mix of referrals and digital"><div class="af-option-key">B</div><div class="af-option-text">A mix of referrals and digital (web, directories)</div></div>
<div class="af-option" data-value="Primarily digital (web, ads, SEO)"><div class="af-option-key">C</div><div class="af-option-text">Primarily digital: web search, ads, or SEO</div></div>
<div class="af-option" data-value="Not tracked systematically"><div class="af-option-key">D</div><div class="af-option-text">Honestly, we don't track this systematically</div></div>
</div>
<div class="af-error" id="err-10">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-11" data-key="referral_trend" data-type="radio" data-required="true">
<span class="af-section-tag">Client Acquisition</span>
<div class="af-question">How would you describe referral volume over the last 12-18 months?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Growing"><div class="af-option-key">A</div><div class="af-option-text">Growing: more referrals coming in than before</div></div>
<div class="af-option" data-value="Stable"><div class="af-option-key">B</div><div class="af-option-text">Stable: holding steady</div></div>
<div class="af-option" data-value="Plateauing"><div class="af-option-key">C</div><div class="af-option-text">Plateauing: feels like we've hit a ceiling</div></div>
<div class="af-option" data-value="Declining"><div class="af-option-key">D</div><div class="af-option-text">Declining: noticeably fewer than before</div></div>
</div>
<div class="af-error" id="err-11">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-12" data-key="digital_self_rating" data-type="scale" data-required="true">
<span class="af-section-tag">Digital Visibility</span>
<div class="af-question">How would you rate the firm's current digital presence?<span class="af-required">*</span></div>
<div class="af-hint">1 = minimal online presence, 5 = strong and actively managed</div>
<div class="af-scale" id="scale-12">
<button class="af-scale-btn" data-value="1" onclick="selectScale(this, 'slide-12')">1</button>
<button class="af-scale-btn" data-value="2" onclick="selectScale(this, 'slide-12')">2</button>
<button class="af-scale-btn" data-value="3" onclick="selectScale(this, 'slide-12')">3</button>
<button class="af-scale-btn" data-value="4" onclick="selectScale(this, 'slide-12')">4</button>
<button class="af-scale-btn" data-value="5" onclick="selectScale(this, 'slide-12')">5</button>
</div>
<div class="af-scale-labels"><span class="af-scale-label">Minimal</span><span class="af-scale-label">Strong</span></div>
<div class="af-error" id="err-12">Please select a rating.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-13" data-key="google_rankings_awareness" data-type="radio" data-required="true">
<span class="af-section-tag">Digital Visibility</span>
<div class="af-question">Do you know how the firm currently ranks in Google for your key practice area terms?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Yes: we track this regularly"><div class="af-option-key">A</div><div class="af-option-text">Yes: we track this regularly</div></div>
<div class="af-option" data-value="Roughly: we've checked but don't monitor it"><div class="af-option-key">B</div><div class="af-option-text">Roughly: we've checked but don't monitor it consistently</div></div>
<div class="af-option" data-value="No: we haven't looked"><div class="af-option-key">C</div><div class="af-option-text">No: we honestly haven't looked into this</div></div>
</div>
<div class="af-error" id="err-13">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-14" data-key="case_type_pages" data-type="radio" data-required="true">
<span class="af-section-tag">Digital Visibility</span>
<div class="af-question">Does the firm's website have dedicated pages for each case type you handle?<span class="af-required">*</span></div>
<div class="af-hint">e.g. a separate page for truck accidents, workplace injuries, medical malpractice</div>
<div class="af-options">
<div class="af-option" data-value="Yes: a dedicated page per case type"><div class="af-option-key">A</div><div class="af-option-text">Yes: a dedicated, well-developed page per case type</div></div>
<div class="af-option" data-value="Partial: some case types have pages"><div class="af-option-key">B</div><div class="af-option-text">Partially: some case types have their own pages</div></div>
<div class="af-option" data-value="No: general practice page only"><div class="af-option-key">C</div><div class="af-option-text">No: it's mostly a general practice description</div></div>
<div class="af-option" data-value="Not sure"><div class="af-option-key">D</div><div class="af-option-text">I'm not sure about the current structure</div></div>
</div>
<div class="af-error" id="err-14">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-15" data-key="verdicts_published" data-type="radio" data-required="true">
<span class="af-section-tag">AI Search Visibility</span>
<div class="af-question">Are significant work examples, results, or outcomes published anywhere online?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Yes: dedicated results page with press releases"><div class="af-option-key">A</div><div class="af-option-text">Yes: a dedicated results page, press releases distributed</div></div>
<div class="af-option" data-value="Mentioned in bios or news section"><div class="af-option-key">B</div><div class="af-option-text">Mentioned in attorney bios or a news section</div></div>
<div class="af-option" data-value="Press has covered us but we haven't published our own"><div class="af-option-key">C</div><div class="af-option-text">Press has covered our cases but we haven't published our own</div></div>
<div class="af-option" data-value="Not published anywhere"><div class="af-option-key">D</div><div class="af-option-text">No: results aren't published anywhere</div></div>
</div>
<div class="af-error" id="err-15">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-16" data-key="legal_directories" data-type="radio" data-required="true">
<span class="af-section-tag">AI Search Visibility</span>
<div class="af-question">Are attorneys listed on major legal directories with complete profiles?<span class="af-required">*</span></div>
<div class="af-hint">Martindale-Hubbell, Super Lawyers, Best Lawyers, Avvo, State Bar directory</div>
<div class="af-options">
<div class="af-option" data-value="Yes: fully listed and current on all major directories"><div class="af-option-key">A</div><div class="af-option-text">Yes: fully listed and current on all major directories</div></div>
<div class="af-option" data-value="Partial: some directories, not all"><div class="af-option-key">B</div><div class="af-option-text">Partially: on some directories but not comprehensively</div></div>
<div class="af-option" data-value="Minimal: basic listings only"><div class="af-option-key">C</div><div class="af-option-text">Minimal: basic listings, not fully built out</div></div>
<div class="af-option" data-value="Not sure"><div class="af-option-key">D</div><div class="af-option-text">I'm not sure what our directory presence looks like</div></div>
</div>
<div class="af-error" id="err-16">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-17" data-key="ai_search_tested" data-type="radio" data-required="true">
<span class="af-section-tag">AI Search Visibility</span>
<div class="af-question">Has anyone searched for your firm or practice area in ChatGPT or Perplexity?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Yes: and we appear prominently"><div class="af-option-key">A</div><div class="af-option-text">Yes: and we appear prominently in the results</div></div>
<div class="af-option" data-value="Yes: and we don't appear or appear minimally"><div class="af-option-key">B</div><div class="af-option-text">Yes: and we don't appear or appear minimally</div></div>
<div class="af-option" data-value="No: we haven't thought to test this"><div class="af-option-key">C</div><div class="af-option-text">No: we haven't thought to test this</div></div>
</div>
<div class="af-error" id="err-17">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-18" data-key="urgency" data-type="scale" data-required="true">
<span class="af-section-tag">Readiness</span>
<div class="af-question">How urgently does the firm need to address these gaps?<span class="af-required">*</span></div>
<div class="af-hint">1 = no urgency, exploring options / 5 = this needs to move fast</div>
<div class="af-scale" id="scale-18">
<button class="af-scale-btn" data-value="1" onclick="selectScale(this, 'slide-18')">1</button>
<button class="af-scale-btn" data-value="2" onclick="selectScale(this, 'slide-18')">2</button>
<button class="af-scale-btn" data-value="3" onclick="selectScale(this, 'slide-18')">3</button>
<button class="af-scale-btn" data-value="4" onclick="selectScale(this, 'slide-18')">4</button>
<button class="af-scale-btn" data-value="5" onclick="selectScale(this, 'slide-18')">5</button>
</div>
<div class="af-scale-labels"><span class="af-scale-label">Exploring</span><span class="af-scale-label">Urgent</span></div>
<div class="af-error" id="err-18">Please select a rating.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-19" data-key="budget_appetite" data-type="radio" data-required="true">
<span class="af-section-tag">Readiness</span>
<div class="af-question">What investment level feels proportionate to act on this?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Under $5K: pilot or proof of concept"><div class="af-option-key">A</div><div class="af-option-text">Under $5K: start with a pilot or proof of concept</div></div>
<div class="af-option" data-value="$5K-$25K: meaningful engagement"><div class="af-option-key">B</div><div class="af-option-text">$5K-$25K: a meaningful engagement</div></div>
<div class="af-option" data-value="$25K-$75K: serious investment"><div class="af-option-key">C</div><div class="af-option-text">$25K-$75K: we're serious about this</div></div>
<div class="af-option" data-value="$75K+: committed to transformation"><div class="af-option-key">D</div><div class="af-option-text">$75K+: committed to real transformation</div></div>
<div class="af-option" data-value="Not sure yet"><div class="af-option-key">E</div><div class="af-option-text">Not sure yet: depends on what you show us</div></div>
</div>
<div class="af-error" id="err-19">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-20" data-key="internal_owner" data-type="radio" data-required="true">
<span class="af-section-tag">Readiness</span>
<div class="af-question">Is there someone at the firm who would own an AI or digital initiative internally?<span class="af-required">*</span></div>
<div class="af-options">
<div class="af-option" data-value="Yes: a partner or ops lead is ready to own this"><div class="af-option-key">A</div><div class="af-option-text">Yes: a partner or ops lead is ready to own this</div></div>
<div class="af-option" data-value="Partial: someone interested but not a dedicated owner"><div class="af-option-key">B</div><div class="af-option-text">Partially: someone is interested but it's not their primary role</div></div>
<div class="af-option" data-value="No: would need to be fully outsourced"><div class="af-option-key">C</div><div class="af-option-text">No: this would need to be fully outsourced</div></div>
</div>
<div class="af-error" id="err-20">Please select an option.</div>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
</div>
</div>
<div class="af-slide" id="slide-21" data-key="success_definition" data-type="textarea" data-required="false">
<span class="af-section-tag">Readiness</span>
<div class="af-question">What would success look like 12 months from now?</div>
<div class="af-hint">Optional: but the more specific you are, the more targeted your report will be.</div>
<textarea class="af-textarea" placeholder="e.g. More cases coming through digital channels, faster intake, attorneys spending less time on document review..."></textarea>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next">Next →</button>
<span class="af-key-hint">press <kbd>Enter ↵</kbd></span>
</div>
</div>
<div class="af-slide" id="slide-22" data-key="anything_else" data-type="textarea" data-required="false">
<span class="af-section-tag">Final Question</span>
<div class="af-question">Anything else you'd like us to know before we prepare your report?</div>
<div class="af-hint">Optional: a specific challenge, competitive pressure, or context that would be useful.</div>
<textarea class="af-textarea" placeholder="e.g. We're about to open a second office, we lost a key associate, a competitor just launched a new site..."></textarea>
<div class="af-nav">
<button class="af-btn-back">← Back</button>
<button class="af-btn-next" onclick="submitForm()">Submit assessment →</button>
<div class="af-spinner" id="af-spinner"></div>
</div>
</div>
<div class="af-confirm" id="slide-confirm" style="display:none;">
<div class="af-confirm-icon">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
<path d="M5 13l4 4L19 7" stroke="#e27308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<h2 class="af-confirm-headline">Assessment received.</h2>
<p class="af-confirm-body">
We will review your submission and have a personalized AI Readiness Report
in your inbox within 24 hours. Here's a preview of what it will cover:
</p>
<div class="af-preview-card" id="score-card">
<div class="af-preview-title" id="score-title">Your AI Readiness Report: Coming Soon</div>
<div class="af-overall-score" id="score-overall-block" style="display:none">
<div class="af-overall-num" id="score-overall">--</div>
<div class="af-overall-label">AI Readiness Index</div>
<div class="af-score-tier" id="score-tier"></div>
<div class="af-score-context" id="score-context"></div>
</div>
<div id="score-radar-wrap" style="display:none;margin:0 0 20px"><svg viewBox="-60 0 420 280" overflow="visible" style="width:100%;max-width:420px;display:block;margin:0 auto"><polygon points="150,114 186,150 150,186 114,150" fill="none" stroke="#ebebeb" stroke-width="1"/><polygon points="150,77 223,150 150,223 77,150" fill="none" stroke="#e5e5e5" stroke-width="1" stroke-dasharray="4,3"/><line x1="150" y1="150" x2="150" y2="40" stroke="#ddd" stroke-width="1"/><line x1="150" y1="150" x2="260" y2="150" stroke="#ddd" stroke-width="1"/><line x1="150" y1="150" x2="150" y2="260" stroke="#ddd" stroke-width="1"/><line x1="150" y1="150" x2="40" y2="150" stroke="#ddd" stroke-width="1"/><polygon id="rshape" points="150,150 150,150 150,150 150,150" fill="rgba(226,115,8,0.12)" stroke="#e27308" stroke-width="2" stroke-linejoin="round" class="rc"/><circle id="rdot0" cx="150" cy="150" r="4" fill="#e27308" class="rc"/><circle id="rdot1" cx="150" cy="150" r="4" fill="#e27308" class="rc"/><circle id="rdot2" cx="150" cy="150" r="4" fill="#e27308" class="rc"/><circle id="rdot3" cx="150" cy="150" r="4" fill="#e27308" class="rc"/><text x="150" y="27" text-anchor="middle" font-size="9" font-weight="700" fill="#bbb">OPS EFFICIENCY</text><text x="267" y="153" font-size="9" font-weight="700" fill="#bbb">ACQUISITION</text><text x="150" y="271" text-anchor="middle" font-size="9" font-weight="700" fill="#bbb">DIGITAL VIS.</text><text x="33" y="153" text-anchor="end" font-size="9" font-weight="700" fill="#bbb">AI MATURITY</text></svg></div>
<div class="af-score-row">
<div class="af-score-block">
<div class="af-score-label">Operational Efficiency</div>
<div class="af-score-bar-track"><div class="af-score-bar-fill" id="scbar-oe" style="width:65%"></div></div>
<div class="af-score-value" id="scval-oe">-</div>
<div class="af-score-insight" id="scins-oe" style="display:none"></div>
</div>
<div class="af-score-block">
<div class="af-score-label">Client Acquisition</div>
<div class="af-score-bar-track"><div class="af-score-bar-fill" id="scbar-ca" style="width:40%"></div></div>
<div class="af-score-value" id="scval-ca">-</div>
<div class="af-score-insight" id="scins-ca" style="display:none"></div>
</div>
<div class="af-score-block">
<div class="af-score-label">Digital Visibility</div>
<div class="af-score-bar-track"><div class="af-score-bar-fill" id="scbar-dv" style="width:30%"></div></div>
<div class="af-score-value" id="scval-dv">-</div>
<div class="af-score-insight" id="scins-dv" style="display:none"></div>
</div>
<div class="af-score-block">
<div class="af-score-label">AI Maturity</div>
<div class="af-score-bar-track"><div class="af-score-bar-fill" id="scbar-am" style="width:20%"></div></div>
<div class="af-score-value" id="scval-am">-</div>
<div class="af-score-insight" id="scins-am" style="display:none"></div>
</div>
</div>
<div class="af-opportunities" id="score-opps" style="display:none">
<div class="af-opp-title">Your Top Opportunities</div>
<div id="score-opps-list"></div>
</div>
<div style="margin-top:24px;padding-top:20px;border-top:1px solid #e5e5e5;text-align:center"><a href="https://www.archificials.com/contact" style="display:inline-block;background:#e27308;color:#fff;font-size:14px;font-weight:700;letter-spacing:.06em;padding:16px 36px;border-radius:3px;text-decoration:none;box-shadow:0 2px 10px rgba(226,115,8,.25)">Book a Free Strategy Call →</a><p style="font-size:11px;color:#aaa;margin-top:10px">Ready to unlock your firm's full AI potential?</p></div><div class="af-preview-note" id="score-note">
<strong>Your report will include:</strong> dimension scores, your top 3 highest-leverage
opportunities, a recommended service path, and estimated ROI benchmarks for your firm size and practice mix.
</div>
</div>
</div>
</div>
</div>`;
var _root=_w.firstChild;
var _mount=document.getElementById('af-cdn-mount');
var _cur=document.currentScript;
if(_mount){_mount.parentNode.replaceChild(_root,_mount);}
else if(_cur&&_cur.parentNode){_cur.parentNode.insertBefore(_root,_cur.nextSibling);}
else{document.body.appendChild(_root);}

// --- Form logic ---

const WORKER_URL='https://law-firm-ai-scorer.law-firm-ai-scorer.workers.dev';
(function(){ let currentSlide=-1; const TOTAL_SLIDES=23; const answers={}; window.startForm=function(){ document.getElementById('slide-intro').style.display='none'; document.getElementById('af-counter').style.display='block'; currentSlide=0; showSlide(0); }; window.nextSlide=function(){ const slide=document.getElementById('slide-'+currentSlide); if(!validateSlide(slide))return; saveAnswer(slide); if(currentSlide>=TOTAL_SLIDES-1)return; const next=currentSlide+1; transition(currentSlide,next,1); currentSlide=next; updateProgress(); }; window.prevSlide=function(){ if(currentSlide<=0)return; const prev=currentSlide-1; transition(currentSlide,prev,-1); currentSlide=prev; updateProgress(); }; function showSlide(index){ const el=document.getElementById('slide-'+index); if(el){el.classList.add('active');el.style.display='block';} } function transition(from,to,dir){ const fromEl=document.getElementById('slide-'+from); const toEl=document.getElementById('slide-'+to); if(fromEl){fromEl.classList.remove('active');fromEl.style.display='none';} if(toEl){toEl.style.display='block';toEl.classList.add('active');} } function updateProgress(){ const pct=Math.round((currentSlide/(TOTAL_SLIDES-1))*100); document.getElementById('af-progress').style.width=pct+'%'; document.getElementById('af-counter').innerHTML= '<em>'+(currentSlide+1)+'</em>/'+TOTAL_SLIDES; } function validateSlide(slide){ const required=slide.dataset.required==='true'; if(!required)return true; const type=slide.dataset.type; const errEl=slide.querySelector('.af-error'); if(type==='radio'||type==='checkbox'){ const selected=slide.querySelector('.af-option.selected'); if(!selected){if(errEl)errEl.classList.add('visible');return false;} } if(type==='text'||type==='email'){ const inp=slide.querySelector('input'); if(!inp||!inp.value.trim()){if(errEl)errEl.classList.add('visible');return false;} if(type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim())){ if(errEl)errEl.classList.add('visible');return false; } } if(type==='scale'){ const selected=slide.querySelector('.af-scale-btn.selected'); if(!selected){if(errEl)errEl.classList.add('visible');return false;} } if(errEl)errEl.classList.remove('visible'); return true; } function saveAnswer(slide){ const key=slide.dataset.key; const type=slide.dataset.type; if(type==='radio'||type==='checkbox'){ const sel=slide.querySelector('.af-option.selected'); answers[key]=sel?sel.dataset.value:''; }else if(type==='text'||type==='email'){ answers[key]=slide.querySelector('input').value.trim(); }else if(type==='textarea'){ answers[key]=slide.querySelector('textarea').value.trim(); }else if(type==='scale'){ const sel=slide.querySelector('.af-scale-btn.selected'); answers[key]=sel?sel.dataset.value:''; } } window.selectOption=function(el){ const slide=el.closest('.af-slide'); const type=slide.dataset.type; if(type==='radio'){ slide.querySelectorAll('.af-option').forEach(o=>o.classList.remove('selected')); } el.classList.toggle('selected'); const errEl=slide.querySelector('.af-error'); if(errEl)errEl.classList.remove('visible'); }; window.selectScale=function(btn,slideId){ const slide=document.getElementById(slideId); slide.querySelectorAll('.af-scale-btn').forEach(b=>b.classList.remove('selected')); btn.classList.add('selected'); const errEl=slide.querySelector('.af-error'); if(errEl)errEl.classList.remove('visible'); }; window.submitForm=function(){ const slide=document.getElementById('slide-22'); saveAnswer(slide); const spinner=document.getElementById('af-spinner'); const submitBtn=slide.querySelector('.af-btn-next'); submitBtn.disabled=true; spinner.classList.add('visible'); if(!WORKER_URL||WORKER_URL.includes('REPLACE')){ setTimeout(function(){showConfirmation(null);},600); return; } fetch(WORKER_URL,{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(answers) }) .then(function(r){return r.json();}) .then(function(scores){showConfirmation(scores);}) .catch(function(){showConfirmation(null);}); }; function showConfirmation(scores){ const lastSlide=document.getElementById('slide-22'); if(lastSlide){lastSlide.classList.remove('active');lastSlide.style.display='none';} document.getElementById('af-progress').style.width='100%'; const confirmEl=document.getElementById('slide-confirm'); confirmEl.style.display='block'; confirmEl.style.animation='af-slide-in 0.4s ease forwards'; if(scores&&!scores.fallback){ const dims=[['oe',scores.operational,scores.insight_operational],['ca',scores.acquisition,scores.insight_acquisition],['dv',scores.digital,scores.insight_digital],['am',scores.ai_maturity,scores.insight_ai_maturity]]; dims.forEach(function(d){ var bar=document.getElementById('scbar-'+d[0]); var val=document.getElementById('scval-'+d[0]); var ins=document.getElementById('scins-'+d[0]); if(bar){bar.style.width='0%'; setTimeout(function(){bar.style.width=d[1]+'%';bar.classList.add('live');},50);} if(val){val.textContent=d[1];val.classList.add('live');} if(ins&&d[2]){ins.textContent=d[2];ins.style.display='block';} }); var ov=document.getElementById('score-overall'); var ovb=document.getElementById('score-overall-block'); var ttl=document.getElementById('score-title'); if(ov){ov.textContent=scores.overall;} if(ovb){ovb.style.display='block';} var sc=scores.overall;var ti=document.getElementById('score-tier');var co=document.getElementById('score-context');if(ti){ti.className='af-score-tier '+(sc<65?'opp':sc<80?'mid':'adv');ti.textContent=sc<40?'Significant Opportunity':sc<65?'Strong Opportunity':sc<80?'Building Readiness':'AI-Advanced Firm';}if(co){co.textContent=sc<65?'A lower index means more AI potential waiting to be unlocked.':sc<80?'You\'re ahead of most firms — AI can push you further.':'You\'re among the top AI adopters in your sector.';}setRadar(scores.operational,scores.acquisition,scores.digital,scores.ai_maturity); if(ttl){ttl.textContent='Your AI Readiness Results';} var card=document.getElementById('score-card'); if(card){card.classList.add('scored');} var opps=document.getElementById('score-opps'); var oppsList=document.getElementById('score-opps-list'); var note=document.getElementById('score-note'); if(opps&&oppsList&&scores.top_opportunities){ oppsList.innerHTML=scores.top_opportunities.map(function(o){return'<div class="af-opp-item">'+o+'</div>';}).join(''); opps.style.display='block'; } if(note){note.style.display='none';} } } function setRadar(oe,ca,dv,am){var r=110,cx=150,cy=150;var sh=document.getElementById('rshape');if(sh)setTimeout(function(){sh.setAttribute('points',cx+','+(cy-oe*r/100)+' '+(cx+ca*r/100)+','+cy+' '+cx+','+(cy+dv*r/100)+' '+(cx-am*r/100)+','+cy);},80);[[0,cx,cy-oe*r/100],[1,cx+ca*r/100,cy],[2,cx,cy+dv*r/100],[3,cx-am*r/100,cy]].forEach(function(d){var dot=document.getElementById('rdot'+d[0]);if(dot)setTimeout(function(){dot.setAttribute('cx',d[1]);dot.setAttribute('cy',d[2]);},80);});var w=document.getElementById('score-radar-wrap');if(w)w.style.display='block';} document.getElementById('ach-af').addEventListener('click',function(e){var opt=e.target.closest('.af-option');if(opt){selectOption(opt);return;}var nb=e.target.closest('.af-btn-next');if(nb&&!nb.onclick){nextSlide();return;}var pb=e.target.closest('.af-btn-back');if(pb){prevSlide();}}); document.addEventListener('keydown',function(e){ if(currentSlide<0)return; const slide=document.getElementById('slide-'+currentSlide); if(!slide)return; const type=slide.dataset.type; if(e.key==='Enter'&&(type==='text'||type==='email'||type==='textarea')){ if(e.shiftKey)return; e.preventDefault(); if(currentSlide===TOTAL_SLIDES-1){submitForm();}else{nextSlide();} } if(type==='radio'&&e.key.match(/^[a-hA-H]$/)){ const idx=e.key.toLowerCase().charCodeAt(0)-97; const opts=slide.querySelectorAll('.af-option'); if(opts[idx]){selectOption(opts[idx]);} } if(type==='scale'&&e.key.match(/^[1-5]$/)){ const btn=slide.querySelector('.af-scale-btn[data-value="'+e.key+'"]'); if(btn){const slideId=slide.id;selectScale(btn,slideId);} } }); })();

})();
