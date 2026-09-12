# Canon

Working notes for UX Lab: core believe, principles, heuristics, and patterns. Human-reviewed.

## My Design Principles

**Confidence to act**

**Value density**

**Progressive Disclosure**

**Workflow Compatiblity**

**Gestalt**

## Design principles

Drawn mainly from Don Norman’s model of how people understand and operate everyday things.

<a id="principle-visibility"></a>

**Visibility.** The user should be able to see the state of the system and the available actions.  
— Don Norman, *The Design of Everyday Things* (rev. ed. 2013). MIT Press.

<a id="principle-feedback"></a>

**Feedback.** Every action should produce a noticeable response in time with the action.  
— Norman, *The Design of Everyday Things* (2013).

<a id="principle-affordances"></a>

**Affordances and signifiers.** Affordances are possible actions; signifiers communicate them.  
— Norman, *The Design of Everyday Things* (2013). See also Gibson, J. J. (1979). *The Ecological Approach to Visual Perception*.

<a id="principle-mapping"></a>

**Mapping.** Controls should correspond spatially or conceptually to their effects.  
— Norman, *The Design of Everyday Things* (2013).

<a id="principle-constraints"></a>

**Constraints.** Limit what can be done so errors are harder.  
— Norman, *The Design of Everyday Things* (2013).

<a id="principle-consistency"></a>

**Consistency.** Similar parts should look and behave similarly.  
— Norman, *The Design of Everyday Things* (2013).

<a id="principle-rams"></a>

**Good design is as little design as possible.**  
— Dieter Rams, “Ten Principles for Good Design” (c. 1970s). [Vitsœ](https://www.vitsoe.com/gb/about/good-design).

<a id="mapping"></a>
### Mapping

Controls should correspond spatially or conceptually to their effects. Natural mapping places controls in the same layout as what they operate, so the relationship can be seen instead of memorized.

— Don Norman, *The Design of Everyday Things* (rev. ed. 2013). [MIT Press](https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/).

Lab demo: [Natural mapping](/patterns/natural-mapping/index.html).

<a id="affordances-and-signifiers"></a>
### Affordances and signifiers

Affordances are the actions an object makes possible. Signifiers are perceivable cues that communicate those actions, so people can see what to do instead of guessing.

A classic case: a handle affords grasping and pulling; a flat plate affords pushing. When the hardware matches the motion, no label is needed.

— Don Norman, *The Design of Everyday Things* (rev. ed. 2013). [MIT Press](https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/). The term *affordance* is from Gibson, J. J. (1979). *The Ecological Approach to Visual Perception*. Houghton Mifflin; Classic Edition, [Psychology Press / Routledge](https://www.routledge.com/The-Ecological-Approach-to-Visual-Perception-Classic-Edition/Gibson/p/book/9781848725782).

Lab demo: [Affordances and signifiers](/patterns/affordances-signifiers/index.html).

## Nielsen’s 10 usability heuristics

Jakob Nielsen’s inspection heuristics. Full definitions: [NN/g](https://www.nngroup.com/articles/ten-usability-heuristics/).

### 1. Visibility of system status

Keep users informed about what is going on, through timely feedback.

### 2. Match between system and the real world

Speak the users’ language; follow real-world conventions.

### 3. User control and freedom

Offer a clear “emergency exit” and undo for mistaken actions.

### 4. Consistency and standards

Same words and actions mean the same thing; follow platform conventions.

### 5. Error prevention

Prevent problems before they happen; confirm before costly commits.

### 6. Recognition rather than recall

Make options and information visible instead of requiring memory.

### 7. Flexibility and efficiency of use

Accelerators for experts without blocking newcomers.

### 8. Aesthetic and minimalist design

Do not compete with needed information through irrelevant clutter.

### 9. Help users recognize, diagnose, and recover from errors

Plain language, precise problem, constructive next step.

### 10. Help and documentation

Easy to search, task-focused, concrete steps.

— Jakob Nielsen (1994). “10 Usability Heuristics for User Interface Design.” Nielsen Norman Group. Originally Nielsen & Molich (1990), CHI ’90.

<a id="fitts-s-law"></a>
## Fitts's law

Time to acquire a target rises with distance and falls with size. Frequent or primary actions should be large and close to where the pointer already is; rare or risky actions can stay smaller and farther away.

Lab demo: [Fitts's law](/patterns/fitts-law/index.html).

— Paul M. Fitts (1954). “The information capacity of the human motor system in controlling the amplitude of movement.” *Journal of Experimental Psychology*, 47(6), 381–391. [doi:10.1037/h0055392](https://doi.org/10.1037/h0055392).

<a id="hick-s-law"></a>
## Hick's law

Time to choose among equally likely options rises with the number of choices (roughly with the log of *n*). Menus and pickers should keep the set small, or progressive, so the next action does not have to be hunted out of a long list.

Lab demo: [Hick's law](/patterns/hicks-law/index.html).

— W. E. Hick (1952). “On the rate of gain of information.” *Quarterly Journal of Experimental Psychology*, 4(1), 11–26. [doi:10.1080/17470215208416600](https://doi.org/10.1080/17470215208416600). Often called the Hick–Hyman law after Hyman, R. (1953). “Stimulus information as a determinant of reaction time.” *Journal of Experimental Psychology*, 45(3), 188–196. [doi:10.1037/h0056302](https://doi.org/10.1037/h0056302).

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
| [Visibility of system status](/patterns/visibility-system-status/index.html) | [#1](#nielsen-1) |
| [Match the real world](/patterns/match-real-world/index.html) | [#2](#nielsen-2) |
| [User control and freedom](/patterns/user-control-freedom/index.html) | [#3](#nielsen-3) |
| [Consistency and standards](/patterns/consistency-standards/index.html) | [#4](#nielsen-4) |
| [Error prevention](/patterns/error-prevention/index.html) | [#5](#nielsen-5) |
| [Recognition rather than recall](/patterns/recognition-not-recall/index.html) | [#6](#nielsen-6) |
| [Flexibility and efficiency](/patterns/flexibility-efficiency/index.html) | [#7](#nielsen-7) |
| [Aesthetic and minimalist](/patterns/aesthetic-minimalist/index.html) | [#8](#nielsen-8) |
| [Error recovery](/patterns/error-recovery/index.html) | [#9](#nielsen-9) |
| [Help and documentation](/patterns/help-documentation/index.html) | [#10](#nielsen-10) |

### Norman (dedicated demos)

| Pattern | Exploring |
| --- | --- |
| [Natural mapping](/patterns/natural-mapping/index.html) | [#Mapping](#mapping) |
| [Affordances and signifiers](/patterns/affordances-signifiers/index.html) | [#Affordances and signifiers](#affordances-and-signifiers) |

### Pointing (dedicated demos)

| Pattern | Exploring |
| --- | --- |
| [Fitts's law](/patterns/fitts-law/index.html) | [#Fitts's law](#fitts-s-law) |

### Choice (dedicated demos)

| Pattern | Exploring |
| --- | --- |
| [Hick's law](/patterns/hicks-law/index.html) | [#Hick's law](#hick-s-law) |

## Similar Sites

- https://ui-patterns.com/patterns
- https://codemyui.com/
- https://uiverse.io/

## References

- Fitts, P. M. (1954). [The information capacity of the human motor system in controlling the amplitude of movement](https://doi.org/10.1037/h0055392). *Journal of Experimental Psychology*, 47(6), 381–391.
- Gibson, J. J. (1979). [*The Ecological Approach to Visual Perception*](https://www.routledge.com/The-Ecological-Approach-to-Visual-Perception-Classic-Edition/Gibson/p/book/9781848725782). Houghton Mifflin; Classic Edition, Psychology Press.
- Hick, W. E. (1952). [On the rate of gain of information](https://doi.org/10.1080/17470215208416600). *Quarterly Journal of Experimental Psychology*, 4(1), 11–26.
- Hyman, R. (1953). [Stimulus information as a determinant of reaction time](https://doi.org/10.1037/h0056302). *Journal of Experimental Psychology*, 45(3), 188–196.
- Nielsen, J. (1994). [10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). Nielsen Norman Group.
- Norman, D. A. (2013). [*The Design of Everyday Things* (revised)](https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/). MIT Press.
- Rams, D. Ten Principles for Good Design. [Vitsœ](https://www.vitsoe.com/gb/about/good-design).
