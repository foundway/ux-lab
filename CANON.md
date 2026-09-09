# Canon

Working notes for UX Lab: principles, heuristics, and patterns. Entries are AI-generated and human-reviewed.

## Design principles

Drawn mainly from Don Norman’s model of how people understand and operate everyday things.

**Visibility.** The user should be able to see the state of the system and the available actions.  
— Don Norman, *The Design of Everyday Things* (rev. ed. 2013). MIT Press.

**Feedback.** Every action should produce a noticeable response in time with the action.  
— Norman, *The Design of Everyday Things* (2013).

**Affordances and signifiers.** Affordances are possible actions; signifiers communicate them.  
— Norman, *The Design of Everyday Things* (2013). See also Gibson, J. J. (1979). *The Ecological Approach to Visual Perception*.

**Constraints.** Limit what can be done so errors are harder.  
— Norman, *The Design of Everyday Things* (2013).

**Consistency.** Similar parts should look and behave similarly.  
— Norman, *The Design of Everyday Things* (2013).

**Good design is as little design as possible.**  
— Dieter Rams, “Ten Principles for Good Design” (c. 1970s). [Vitsœ](https://www.vitsoe.com/gb/about/good-design).

<a id="mapping"></a>
### Mapping

Controls should correspond spatially or conceptually to their effects. Natural mapping places controls in the same layout as what they operate, so the relationship can be seen instead of memorized.

— Don Norman, *The Design of Everyday Things* (rev. ed. 2013). [MIT Press](https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/).

Lab demo: [Natural mapping](/patterns/natural-mapping/index.html).

## Nielsen’s 10 usability heuristics

Jakob Nielsen’s inspection heuristics. Full definitions: [NN/g](https://www.nngroup.com/articles/ten-usability-heuristics/).

1. **Visibility of system status** — Keep users informed about what is going on, through timely feedback.
2. **Match between system and the real world** — Speak the users’ language; follow real-world conventions.
3. **User control and freedom** — Offer a clear “emergency exit” and undo for mistaken actions.
4. **Consistency and standards** — Same words and actions mean the same thing; follow platform conventions.
5. **Error prevention** — Prevent problems before they happen; confirm before costly commits.
6. **Recognition rather than recall** — Make options and information visible instead of requiring memory.
7. **Flexibility and efficiency of use** — Accelerators for experts without blocking newcomers.
8. **Aesthetic and minimalist design** — Do not compete with needed information through irrelevant clutter.
9. **Help users recognize, diagnose, and recover from errors** — Plain language, precise problem, constructive next step.
10. **Help and documentation** — Easy to search, task-focused, concrete steps.

— Jakob Nielsen (1994). “10 Usability Heuristics for User Interface Design.” Nielsen Norman Group. Originally Nielsen & Molich (1990), CHI ’90.

## Patterns in this lab

### Gallery staples

| Pattern | Exploring |
| --- | --- |
| Toast with undo | Feedback and reversal |
| Command palette | Expert accelerators |
| Inline form validation | Field errors in context |
| Empty state | First-run next action |
| Skeleton loading | Waiting with layout stability |
| Confirm dialog | Destructive confirm, cancel as default |

### Nielsen heuristics (dedicated demos)

| Pattern | Heuristic |
| --- | --- |
| [Visibility of system status](/patterns/visibility-system-status/index.html) | #1 |
| [Match the real world](/patterns/match-real-world/index.html) | #2 |
| [User control and freedom](/patterns/user-control-freedom/index.html) | #3 |
| [Consistency and standards](/patterns/consistency-standards/index.html) | #4 |
| [Error prevention](/patterns/error-prevention/index.html) | #5 |
| [Recognition rather than recall](/patterns/recognition-not-recall/index.html) | #6 |
| [Flexibility and efficiency](/patterns/flexibility-efficiency/index.html) | #7 |
| [Aesthetic and minimalist](/patterns/aesthetic-minimalist/index.html) | #8 |
| [Error recovery](/patterns/error-recovery/index.html) | #9 |
| [Help and documentation](/patterns/help-documentation/index.html) | #10 |

### Norman (dedicated demos)

| Pattern | Exploring |
| --- | --- |
| [Natural mapping](/patterns/natural-mapping/index.html) | [#Mapping](#mapping) |

## References

- Nielsen, J. (1994). [10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). Nielsen Norman Group.
- Norman, D. A. (2013). [*The Design of Everyday Things* (revised)](https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/). MIT Press.
- Rams, D. Ten Principles for Good Design. [Vitsœ](https://www.vitsoe.com/gb/about/good-design).
