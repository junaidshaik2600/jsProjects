# QA Interview Mock — 10 High-Probability Questions + Model Answers

**These are the exact style of questions most likely to come tomorrow.**

**Your goal:** Sound like you already think like a QA, not like someone memorizing notes.

### Rule for every answer:
**Pause → Structure → Example → Stop**

---

### 1. Tell me about yourself

**Model Answer**

“I have been working as a rater for the past 1 year, mainly handling AI-generated output reviews and decision-based quality checks. This gave me strong exposure to policy interpretation, identifying errors, and maintaining consistency in decisions.

One thing I learned from being a rater is understanding where reviewers usually struggle—policy confusion, edge cases, and repeated mistakes. That experience made me interested in the Quality Assurance role because QA is not just about finding mistakes, but improving the whole team’s quality.

For this interview, I specifically prepared QA responsibilities, precision and recall, feedback methods, RCA, and the 7 quality tools so I could understand both theory and practical workflow.”

---

### 2. What are the roles and responsibilities of QA?

**Model Answer**

“A QA has five main responsibilities.

First is **audits**—like Koala, safety net, stratified audits, random audits, and tool tests.

Second is **preparing quality reports**—weekly reports for team performance and audit results.

Third is **daily communication**—SOD huddles to clear doubts and MOM emails after meetings.

Fourth is **feedback**—one-on-one sessions with reviewers who made errors using structured methods like the sandwich method.

Fifth is **supporting OJT batches**—monitoring new joiners through random audits and weekly reports.

Additionally, QA handles client escalations using RCA and also gives refresher sessions whenever policy updates happen.”

---

### 3. What is quality?

**Model Answer**

“Quality means making the right decision consistently.

It is not about speed, effort, or how hard someone works. It is about **decision correctness and consistency**.

For example, if a bad case should be suspended and the reviewer correctly suspends it, that is quality. If a good case should be released and the reviewer releases it correctly, that is also quality.

As a QA, my role is to make sure this decision quality remains strong across the whole team.”

---

### 4. What is precision and recall?

**Model Answer**

“Precision measures how accurate our suspensions are.  
**Formula:** TP / (TP + FP)

It answers: *Out of all the cases we marked as bad, how many were actually bad?*

If precision drops, it means reviewers are over-flagging, so I would focus on reducing false positives through targeted feedback.

Recall measures how many bad cases we successfully catch.  
**Formula:** TP / (TP + FN)

It answers: *Out of all actual bad cases, how many did we catch?*

If recall drops, it means bad cases are escaping, so I would focus on reducing false negatives because missed bad cases are more risky.”

---

### 5. Explain TP, TN, FP, FN

**Model Answer**

“In our workflow:

- **TP (True Positive)** — A bad case correctly marked as bad.  
- **TN (True Negative)** — An okay case correctly marked as okay.  
- **FP (False Positive)** — An okay case wrongly marked as bad (over-flagging).  
- **FN (False Negative)** — A bad case wrongly marked as okay (most dangerous).

The simple way I remember it is:  
**Bad caught = TP**  
**Good released = TN**  
**Good stopped = FP**  
**Bad escaped = FN**”

---

### 6. What is effective feedback? Explain sandwich method

**Model Answer**

“Effective feedback helps the reviewer improve without making them defensive. The goal is correction and improvement, not blame.

I use the **sandwich method**:

1. Start with something positive and genuine.  
2. Explain the specific error clearly — what happened, why it was wrong, and what policy should have been followed.  
3. End with encouragement and confidence so the reviewer feels supported.

For example, if someone made a policy error, I would first appreciate their consistency and production, then explain the exact mistake with policy reference, and finally reassure them that after reviewing the guideline, I am confident the error will not repeat.”

---

### 7. What is RCA?

**Model Answer**

“RCA means **Root Cause Analysis**.

It is used to find the real reason behind an error, not just the surface mistake.

For example, if a reviewer suspended an account wrongly, the issue is not just ‘they made an error.’ We ask *why*.

Maybe the policy was updated and the refresher was missed. Maybe the communication process failed.

Using methods like **5 Why analysis** helps identify the real root cause.

As a QA, I would prepare RCA for client escalations, identify whether it is a reviewer issue or a system issue, and fix the root cause so the error does not repeat.”

---

### 8. What are the 7 quality tools?

**Model Answer**

“The 7 quality tools are:

1. **Fishbone diagram**  
2. **Check sheet**  
3. **Control chart**  
4. **Histogram**  
5. **Pareto chart**  
6. **Scatter diagram**  
7. **Stratification**

- Fishbone helps find root causes.  
- Check sheet is for collecting error data.  
- Control chart monitors performance over time.  
- Histogram shows frequency distribution.  
- **Pareto chart** helps identify the few causes creating most problems (80/20 rule).  
- Scatter diagram shows relationships between two variables.  
- Stratification separates data into groups to find hidden patterns.

These tools help QA move from guessing to **data-based improvement**.”

---

### 9. What did you prepare for this interview?

**Model Answer**

“I prepared six key areas for this QA role:

1. QA roles and responsibilities (audits, reports, SOD, MOM, refresher sessions).  
2. Precision, recall, and accuracy (including TP, TN, FP, FN).  
3. Feedback methods (effective feedback and sandwich method).  
4. RCA and 5 Why analysis.  
5. The 7 quality tools (Fishbone, Pareto, Histogram, etc.).  
6. Sensitive and non-sensitive content handling.

I wanted to make sure I understand both **theory and practical application**.”

---

### 10. Are you comfortable handling sensitive or adult content?

**Model Answer**

“Yes, I am comfortable.

I understand that reviewing sensitive or adult content is part of the job, and I approach it professionally with a focus on **policy compliance** rather than personal perception.

The goal is moderation and safety, not personal judgment. As long as I clearly understand the policy and the responsibility of the role, I am comfortable handling that work.”

---

## FINAL QUESTION YOU MUST ASK THEM

**Ask this at the end:**

> “What does the first 30 days look like for a new QA joining your team? Is there a calibration period, or do new QAs start auditing independently right away?”

**This question makes you sound like someone already thinking as a QA.**

---

**This is your real interview set. Master these 10 → you cover almost everything.**

---

*Prepared for Junaid — Good luck tomorrow!*
