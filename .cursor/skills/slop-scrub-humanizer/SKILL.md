---
name: slop-scrub-humanizer
description: Mandatory AI writing pattern scrub and humanizer for all text output. Combines the best of every anti-slop, humanizer, and AI-writing-scrub skill into one comprehensive checklist with 22 construction bans, 16-category vocabulary kill list, and a 14-step audit process. Triggers on any task involving writing, drafting, editing, or generating content -- case studies, talking points, copy, documentation, emails, presentations, proposals, or any prose. Run the full checklist against every sentence before delivering. No exceptions. No rationalizing keeps. Derived from Wikipedia Signs of AI Writing (53-page field guide, 2025-2026) plus patterns from competing humanizer and copy-editor skills.
---

# Slop Scrub Humanizer

This is not a style guide. It is a mandatory audit. Run it against every sentence of every draft before delivering output to the user.

## Rules

1. Gather context before drafting (see Pre-draft context below).
2. Draft the content.
3. Before delivering, run EVERY sentence through the Kill List and Construction Bans below.
4. Any sentence that triggers a rule gets rewritten. No rationalizing. No "but it sounds natural here." No "this one is fine in context." Rewrite it.
5. After rewriting, run the full audit again. Patterns cluster -- fixing one may reveal another.
6. If you cannot rewrite a sentence without triggering a rule, flag it for the user and explain what's stuck.

## Pre-draft context

Before writing a single word, establish these. Ask the user if not provided.

- **Audience and relationship**: Who is reading this? What is the writer's relationship and relative seniority to them?
- **Situation timing**: Where does this piece sit in a process?
- **Purpose**: What should the reader think, feel, or do after reading?
- **Shared knowledge**: What does the reader already know about this situation?
- **Agency**: Are there any decisions in this message that aren't the writer's to make?
- **Voice sample**: Has the user written something similar before? If so, match their actual patterns.
- **What NOT to say**: Are there things that would land wrong given the relationship?

## Kill List -- Vocabulary

These words and phrases are BANNED from output. If any appear, the sentence must be rewritten. No exceptions.

| Category | Banned |
|---|---|
| Puffery verbs | showcase, exemplify, underscore, highlight (verb), emphasize, foster, garner, bolster, enhance, delve, cultivate, encompass, captivate, spearhead |
| Puffery adjectives | crucial, pivotal, key (adj.), vital, significant, intricate, meticulous, vibrant, profound, groundbreaking, renowned, invaluable, comprehensive, robust, enduring, ongoing, lasting, valuable, rich (generic praise) |
| Filler adjectives | lightweight, seamless, cutting-edge, holistic, dynamic, innovative |
| Filler phrases | diverse array, wide range, in order to (use "to"), due to the fact that (use "because"), it is important to note that (delete) |
| Connectors | Additionally, Furthermore, Moreover, Notably, Consequently |
| AI closers | In summary, In conclusion, Overall, Moving forward |
| Copula avoidance | serves as, stands as, marks a (when "is" works), represents a (when "is" works), boasts, features (when "has" works) |
| Absorption verbs | reflecting, symbolizing, contributing to, aligning with, resonating with, setting the stage for, paving the way, highlighting, underscoring, emphasizing, showcasing, ensuring, fostering |
| Collaborative artifacts | I hope this helps, Of course!, Certainly!, You're absolutely right!, Would you like..., is there anything else |

## Kill List -- Constructions

These sentence structures are BANNED. If any appear, the sentence must be restructured. No exceptions.

1. **Negative parallelism**: "Not only X, but Y" / "It's not just X, it's Y"
2. **Rule of three**: Three adjectives, phrases, or examples in a row. Use 2 or 4+.
3. **Em dash overuse**: Maximum ONE em dash per 500 words.
4. **Punchy standalone closers**: A short sentence (under 6 words) restating the previous sentence.
5. **Superficial -ing analysis**: Sentences ending with vague participial phrases.
6. **Pattern naming**: Giving fancy labels to simple concepts.
7. **Elegant variation**: Using synonyms to avoid repeating a word.
8. **Despite-challenges formula**: Challenges acknowledged only to be immediately dismissed.
9. **Bolted-on significance**: "marking a pivotal moment in..." / "setting the stage for..."
10. **Copula avoidance**: "serves as" when "is" works.
11. **Promotional tone**: Travel-guide or press-release language.
12. **Vague attributions**: "observers note," "experts argue."
13. **Undue significance**: Asserting importance of routine events.
14. **Didactic disclaimers**: "It's important to note that..."
15. **Section summaries**: Ending paragraphs by summarizing their own content.
16. **Inline-header vertical lists**: Bold header + description bullet lists.
17. **Overuse of boldface**: Bold is for structural labels only.
18. **Collaborative artifacts**: "Would you like me to expand on..."
19. **Knowledge-gap hedging**: "Based on available information..."
20. **False ranges**: "From X to Y" when X and Y are not actual endpoints.
21. **Staccato overcorrection**: Five or more short fragments in a row.
22. **Performing human**: Staged casualness or manufactured irreverence.

## Audit Process

After drafting, run this exact sequence:

1. Vocabulary scan: Search output for every word in the Kill List. Any hit = rewrite.
2. Construction scan: Check every sentence against all 22 bans. Any match = restructure.
3. Three-count check: Any group of exactly 3 = add a 4th or cut to 2.
4. Em dash count: If more than 1 per 500 words, replace extras.
5. Standalone closer check: Delete short sentences and see if anything is lost.
6. Copula check: Try replacing "serves as" etc. with "is" or "has."
7. Promotional tone check: Could this appear in a press release? If yes, flatten.
8. Attribution check: Name sources specifically or remove.
9. Significance check: Does the sentence add verifiable information? If not, cut.
10. Formatting check: Scan for bold emphasis, title case, emoji, curly quotes.
11. Rhythm check: Read aloud. Flag staccato runs or monotonous length.
12. Performing human check: Would this person actually write this to this audience?
13. Anti-AI review pass: "What makes this obviously AI-generated?" Fix remaining tells.
14. Full re-read: If any sentence could appear in a ChatGPT marketing email, rewrite.

## Quick pre-publish checklist

```
[ ] No banned vocabulary words from Kill List
[ ] No em dashes (or max 1 per 500 words)
[ ] No rule of three
[ ] No negative parallelisms
[ ] No -ing tack-on phrases
[ ] No copula avoidance
[ ] No vague attributions
[ ] No collaborative artifacts
[ ] No bold emphasis mid-paragraph
[ ] Sentence lengths vary
[ ] Tone matches actual relationship and seniority
[ ] At least one specific number, name, or concrete detail per paragraph
[ ] Ending is specific, not generic positivity
```

## Credits

**Primary source**: Wikipedia:Signs of AI writing (53-page field guide, CC BY-SA 4.0).
**Adapted from**: trailofbits/skills-curated@humanizer, atrislabs/atris@copy-editor, coreyhaines31/marketingskills@copywriting.
