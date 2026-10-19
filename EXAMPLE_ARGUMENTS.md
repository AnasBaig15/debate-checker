# 📋 Example Arguments for DebateChecker

Use these examples to showcase your app's capabilities!

---

## 1. **Weak Argument (Multiple Fallacies)**

### Input:
```
"Social media is bad because everyone uses it and gets depressed. 
My cousin used Instagram for a month and became sad, so obviously 
social media causes depression in all people."
```

### What It Finds:
- ❌ Hasty Generalization (one person ≠ everyone)
- ❌ False Cause (post hoc reasoning)
- ❌ Appeal to common belief
- Score: **35% - Very Weak**

---

## 2. **Good Argument (With Evidence)**

### Input:
```
"Regular exercise improves mental health. According to the American 
Psychological Association, 87% of people who exercise 3+ times weekly 
report improved mood. A 2023 Harvard study showed exercise reduces 
anxiety by 35% on average. Therefore, incorporating exercise into 
daily routines can significantly benefit mental wellness."
```

### What It Finds:
- ✅ Good evidence (statistics, research)
- ✅ Specific claims backed by sources
- ✅ Minimal fallacies
- Score: **78% - Strong**

---

## 3. **Moderate Argument (Some Evidence)**

### Input:
```
"Technology makes us less social. Young people spend hours on their phones 
instead of meeting friends face-to-face. Studies show screen time affects 
attention spans. However, technology also enables long-distance relationships."
```

### What It Finds:
- ✅ Acknowledges opposing view
- ⚠️ Some generalization
- ⚠️ Could use more specific data
- Score: **62% - Moderate**

---

## 4. **Logical Fallacy Example (Ad Hominem)**

### Input:
```
"You can't trust Dr. Smith's climate research because he's not a 
very likeable person and he drives a gas-guzzling car."
```

### What It Finds:
- ❌ Ad Hominem (attacking person, not argument)
- Score: **15% - Very Weak**

---

## 5. **False Dilemma Example**

### Input:
```
"You're either with us or against us on this issue. There's no middle ground. 
Everyone must choose a side completely."
```

### What It Finds:
- ❌ False Dilemma (presents only 2 options)
- ❌ Circular reasoning
- Score: **20% - Very Weak**

---

## 6. **Appeal to Authority Example**

### Input:
```
"Coffee is healthy because a famous celebrity said so on Instagram. 
They have 5 million followers, so they must be an expert on nutrition."
```

### What It Finds:
- ❌ Appeal to Authority (fame ≠ expertise)
- ❌ Hasty Generalization
- Score: **25% - Very Weak**

---

## 7. **Complex Argument (Needs Improvement)**

### Input:
```
"Online learning is better than in-person education. During the pandemic, 
students could learn from home. Remote work is also becoming popular. 
Therefore, all schools should switch to online-only."
```

### What It Finds:
- ⚠️ Assumes pandemic situation = permanent solution
- ⚠️ Different contexts (work ≠ education)
- ⚠️ Missing evidence on learning outcomes
- Score: **45% - Weak**

**Better Version:**
```
"Online learning can be effective for some students. A Stanford study 
found that self-directed learners achieve 85% of the outcomes of 
in-person students. However, hands-on subjects like lab science still 
benefit from in-person instruction."
```

---

## 8. **Circular Reasoning Example**

### Input:
```
"Video games are bad because they're harmful. They're harmful because 
bad games shouldn't be played by kids. Kids shouldn't play them because 
they're bad."
```

### What It Finds:
- ❌ Circular Reasoning (no actual proof)
- Score: **5% - Very Weak**

---

## 9. **Strong Academic Argument**

### Input:
```
"The French Revolution (1789-1799) was a pivotal event in European history 
that fundamentally transformed political systems. Primary sources show that 
the Enlightenment philosophers influenced revolutionary ideals. Historical 
data indicates that 40,000+ lives were lost. Contemporary documents reveal 
that the revolution established democratic principles still used today."
```

### What It Finds:
- ✅ Specific dates and facts
- ✅ Multiple evidence types
- ✅ Acknowledges scale
- Score: **82% - Strong**

---

## 10. **Business Pitch Argument**

### Input:
```
"Our product is the best because it's innovative and customers love it. 
We've sold 100,000 units in 6 months. Market research shows 92% customer 
satisfaction. Competitors charge 3x more for similar features. Our team 
has 50+ years combined industry experience."
```

### What It Finds:
- ✅ Concrete numbers
- ✅ Comparative advantage
- ✅ Team credentials
- Score: **75% - Strong**

---

## 11. **Debate Topic (Students)**

### Input:
```
"Homework should be eliminated because students are stressed. 
My friend has 3 hours of homework daily and she's tired. Studies show 
excessive homework causes anxiety. Therefore, schools should ban all homework."
```

### What It Finds:
- ❌ Hasty Generalization
- ⚠️ "Excessive" ≠ all homework
- Score: **40% - Weak**

**Better Version:**
```
"Homework should be limited to 1-2 hours daily. Research from the American 
Educational Research Association shows diminishing returns beyond this point. 
Students need time for extracurricular activities, which develop other skills. 
However, some homework reinforces learning."
```

---

## 12. **Marketing Claim**

### Input:
```
"This coffee will change your life! It's the best coffee in the world 
because it tastes amazing. Everyone who tries it loves it. Buy it now!"
```

### What It Finds:
- ❌ "Best in the world" - unsupported claim
- ❌ "Everyone loves it" - hasty generalization
- ❌ No specific benefits listed
- Score: **30% - Very Weak**

**Better Version:**
```
"Our coffee contains 40% more antioxidants than average brands (verified 
by USDA). 94% of testers in our blind taste test preferred our blend. 
It's sourced from fair-trade farms, supporting 500+ farmers directly."
```

---

## 13. **Health Claim (Weak)**

### Input:
```
"Drinking lemon water cures cancer because lemons are acidic and cancer 
hates acidic environments. My grandmother drank it and lived to 95. 
It's completely safe and costs nothing."
```

### What It Finds:
- ❌ False Cause (anecdote ≠ proof)
- ❌ Dangerous health claim
- ❌ No scientific basis
- Score: **5% - Very Weak**

---

## 14. **Climate Change Argument (Evidence-Based)**

### Input:
```
"Global temperatures have risen 1.1°C since pre-industrial times (NASA data). 
CO2 levels are at 420 ppm, highest in 800,000 years (ice core records). 
97% of climate scientists agree on human-caused climate change. Consequences 
include rising sea levels and extreme weather patterns documented globally."
```

### What It Finds:
- ✅ Specific measurements
- ✅ Multiple sources
- ✅ Expert consensus cited
- Score: **88% - Strong**

---

## 15. **Product Comparison (Weak to Strong)**

### Weak:
```
"iPhone is better because it's expensive and everyone has one."
```
Score: **25% - Very Weak**

### Strong:
```
"iPhone offers superior security with 256-bit encryption (industry standard). 
iCloud integration works seamlessly across 5 device types. App Store has 
2M+ apps vs 1.8M on Android. Average user retention is 94% after 2 years, 
highest in the industry. However, Android offers more customization options."
```
Score: **82% - Strong**

---

## 🎯 **How to Use These**

1. **Showcase Range** – Use weak, moderate, and strong examples
2. **Show Improvement** – Compare weak vs. strong versions
3. **Demonstrate Value** – Show how users can improve arguments
4. **Test Features** – Each example triggers different fallacy detection
5. **Educate Users** – Help them understand logical fallacies

---

## 💡 **Pro Tips for Examples**

✅ Mix weak and strong arguments
✅ Show before/after improvements
✅ Use real-world topics
✅ Include educational value
✅ Demonstrate all fallacy types
✅ Show evidence importance
✅ Include discipline variety (academic, business, health, etc.)

---

Pick any of these to demonstrate your app! They showcase different fallacies and quality levels. 🎯
