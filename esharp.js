/**
 * E# Compiler
 * 
 * NOTE: Source taken from https://gist.github.com/sma/78e572e2e0775cc2e570
 * @description A small programming language created for fun!
 */

'use strict';

const source = `
1000 REM    ***********************************************************
1010 REM    *    DUNGEON MASTER'S PERSONNEL SERVICE                   *
1020 REM    *    ( 40 COLUMN BY 16 LINE CRT DISPLAY ONLY )            *
1030 REM    *    SAVE AS "D&DCRT.BAS" - VERSION 1.2                   *
1040 REM    *                                                         *
1050 REM    ***********************************************************
1060 REM    *    GENERATES PLAYER CHARACTERISTIC FOR FANTASY          *
1070 REM    *    ROLE - PLAYING GAME "DUNGEONS & DRAGONS" Tm          *
1080 REM    ***********************************************************
1090 REM    *    WRITTEN BY: JOSEPH C. SPANN - MONROE, LA.            *
1100 REM    * "DUNGEON MASTER'S PERSONNEL SERVICE"-ver 1.2(C)LAIRTECH *
1110 REM    *   "DUNGEONS & DRAGONS" Tm BY TSR HOBBIES INC.           *
1130 REM    ***********************************************************
1140 DIM PS(7)
1150 RANDOMIZE
1160 PRINT CHR$(12)
1170 PRINT
1180 PRINT "    DM'S PERSONNEL SERVICE"
1190 PRINT "-----------------------------------------"
1200 PRINT
1210 PRINT "    PRODUCES CHAR. ABILITY SCORES"
1220 PRINT
1230 PRINT "    FOR"
1240 PRINT
1250 PRINT "    DUNGEONS & DRAGONS™"
1260 PRINT
1280 PRINT "    IF YOU ARE READY FOR THE 1ST"
1290 PRINT "    CHARACTER, ENTER A ONE (1)."
1300 INPUT C
1310 ON C GOTO 1320
1320 PRINT CHR$(12)
1330 REM***************************
1340 REM BEGIN 3D6 ROLLS FOR ABILITIES
1350 REM***************************
1360 L = L + 1
1370 Z = INT((RND(1) * 6) + 1)
1380 Z2 = INT((RND(1) * 6) + 1)
1390 Z3 = INT((RND(1) * 6) + 1)
1400 ZZ = Z + Z2 + Z3
1410 IF L = 1 THEN 1530
1420 IF L = 2 THEN 1680
1430 IF L = 3 THEN 1760
1440 IF L = 4 THEN 2120
1450 IF L = 5 THEN 2340
1460 IF L = 6 THEN 2510
1500 REM***************************
1510 REM CALCULATIONS FOR STRENGTH
1520 REM***************************
1530 PRINT "CHARACTER'S STRENGTH IS "; ZZ
1540 ST = ZZ
1550 IF ST = 3 THEN SF = -3
1560 IF ST > 3 AND ST < 6 THEN SF = -2
1570 IF ST > 5 AND ST < 9 THEN SF = -1
1580 IF ST > 8 AND ST < 13 THEN SF = 0
1590 IF ST > 12 AND ST < 16 THEN SF = 1
1600 IF ST > 15 AND ST < 18 THEN SF = 2
1610 IF ST = 18 THEN SF = 3
1620 IF SF = 0 THEN 1360
1630 PRINT "*ADD"; SF; "TO ROLLS TO HIT,DAMAGE,OPEN DOORS"
1640 GOTO 1360
1650 REM***************************
1660 REM CALCULATIONS FOR CONSTITUTION
1670 REM***************************
1680 CO = ZZ
1690 A = ST / CO
1700 IF A < .67 OR A > 1.5 THEN 1370
1710 PRINT "CONSTITUTION SCORE IS"; ZZ
1720 GOTO 1360
1730 REM***************************
1740 REM CALCULATIONS FOR INTELLIGENCE
1750 REM***************************
1760 PRINT "CHARACTER'S INTELLIGENCE"; ZZ
1770 IN = ZZ
1780 IF IN < 9 THEN IZ$ = "*INTELLIGENCE TOO LOW FOR MAGIC USER."
1790 IF IN = 9 THEN IZ$ = "*35% TO KNOW SPELL-MIN/MAX PER LVL:4/6"
1800 IF IN > 9 AND IN < 13 THEN IZ$ = "*45% TO KNOW SPELL-MIN/MAX PER LVL:5/7"
1810 IF IN > 12 AND IN < 15 THEN IZ$ = "*55% TO KNOW SPELL-MIN/MAX PER LVL:6/9"
1820 IF IN > 14 AND IN < 17 THEN IZ$ = "*65% TO KNOW SPELL-MIN/MAX PER LVL:7/11"
1830 IF IN = 17 THEN IZ$ = "*75% TO KNOW SPELL-MIN/MAX PER LVL:8/14"
1840 IF IN = 18 THEN IZ$ = "*85% TO KNOW SPELL - MIN/MAX PER LVL:9/18"
1850 IF IN = 3 THEN 1870
1860 GOTO 1880
1870 I$ = "* DIFFICULT SPEECH-ILLITERATE"
1880 IF IN > 3 AND IN < 6 THEN 1900
1890 GOTO 1910
1900 I$ = "* EASY SPEECH BUT ILLITERATE"
1910 IF IN > 5 AND IN < 9 THEN 1930
1920 GOTO 1940
1930 I$ = "* BARELY LITERATE."
1940 IF IN > 8 AND IN < 13 THEN 1960
1950 GOTO 1970
1960 I$ = "* LITERATE IN NATIVE TONGUE."
1970 IF IN > 12 AND IN < 16 THEN 1990
1980 GOTO 2000
1990 I$ = "* LITERATE AND FLUENT 2 LANGUAGES"
2000 IF IN > 15 AND IN < 18 THEN 2020
2010 GOTO 2030
2020 I$ = "* LITERATE AND FLUENT 3 LANGUAGES"
2030 IF IN = 18 THEN 2050
2040 GOTO 2060
2050 I$ = "* LITERATE AND FLUENT 4 LANGUAGES"
2060 PRINT I$
2070 PRINT IZ$
2080 GOTO 1360
2090 REM***************************
2100 REM CALCULATIONS FOR DEXTERITY
2110 REM***************************
2120 PRINT "CHARACTER'S DEXTERITY IS "; ZZ
2130 DX = ZZ
2140 IF DX = 3 THEN DF = -3
2150 IF DX > 3 AND DX < 6 THEN DF = -2
2160 IF DX > 5 AND DX < 9 THEN DF = -1
2170 IF DX > 8 AND DX < 13 THEN DF = 0
2180 IF DX > 12 AND DX < 16 THEN DF = 1
2190 IF DX > 15 AND DX < 18 THEN DF = 2
2200 IF DX = 18 THEN DF = 3
2210 IF DF = -3 THEN GOSUB 5320
2220 IF DF = -2 THEN GOSUB 5340
2230 IF DF = -1 THEN GOSUB 5360
2240 IF DF = 1 THEN GOSUB 5380
2250 IF DF = 2 THEN GOSUB 5400
2260 IF DF = 3 THEN GOSUB 5420
2270 IF DF = 0 THEN GOTO 1360
2280 PRINT "*ADD "; DF; "TO MISSILE FIRE ROLLS 'TO HIT'"
2290 PRINT "* "; X1$; X2$; X3$; " ARMOR CLASS."
2300 GOTO 1360
2310 REM***************************
2320 REM CALCULATIONS FOR WISDOM
2330 REM***************************
2340 WI = ZZ
2350 B = IN / WI
2360 IF B < .67 OR B > 1.5 THEN 1370
2370 PRINT "CHARACTER'S WISDOM IS "; WI
2380 IF WI = 3 THEN WF = -3
2390 IF WI > 3 AND WI < 6 THEN WF = -2
2400 IF WI > 5 AND WI < 9 THEN WF = -1
2410 IF WI > 8 AND WI < 13 THEN WF = 0
2420 IF WI > 12 AND WI < 16 THEN WF = 1
2430 IF WI > 15 AND WI < 18 THEN WF = 2
2440 IF WI = 18 THEN WF = 3
2450 IF WF = 0 THEN 1360
2460 PRINT "*ADD"; WF; "TO ROLL-MAGIC BASED SAVING THROW"
2470 GOTO 1360
2480 REM***************************
2490 REM CALCULATIONS FOR CHARISMA
2500 REM***************************
2510 PRINT "CHARACTER'S CHARISMA IS "; ZZ
2520 LET CH = ZZ
2530 IF CH = 3 THEN XF = 1
2540 IF CH > 3 AND CH < 6 THEN XF = 2
2550 IF CH > 5 AND CH < 9 THEN XF = 3
2560 IF CH > 8 AND CH < 13 THEN XF = 4
2570 IF CH > 12 AND CH < 16 THEN XF = 5
2580 IF CH > 15 AND CH < 18 THEN XF = 6
2590 IF CH = 18 THEN XF = 7
2600 PRINT "*CAN HAVE "; XF; " RETAINERS WITH MORALE OF"; XF
2610 L = 0
2620 REM***************************
2630 REM RACE/CLASS SELECTION & CHECKING
2640 REM***************************
2650 PRINT " IF YOU HAVE THIS DATA AND ARE READY TO"
2660 PRINT " PROCEED, ENTER A ONE (1)."
2670 INPUT VG
2680 ON VG GOTO 2690
2690 PRINT CHR$(12): PRINT
2700 PRINT "         CLASS/RACE LIST"
2710 PRINT "-----------------------------------------"
2720 PRINT " (1) FIGHTER         (4) HALFLING"
2730 PRINT " (2) MAGIC USER      (5) ELF"
2740 PRINT " (3) CLERIC          (6) DWARF"
2750 PRINT "           (7) THIEF"
2760 PRINT
2770 PRINT "SELECT THE RACE/CLASS THAT YOU WISH"
2780 PRINT "YOUR CHARACTER TO HAVE AND ENTER THE"
2790 INPUT "NUMBER FROM THE TABLE ABOVE"; CN
2800 IF CN = 4 THEN 2820
2810 GOTO 2870
2820 IF DX < 9 OR CD < 9 THEN 2840
2830 GOTO 2870
2840 PRINT " DEXTERITY AND/OR CONSTITUTION"
2850 PRINT " TOO LOW FOR HALFLING"
2860 GOTO 2770
2870 IF CN = 5 AND IN < 9 THEN 2890
2880 GOTO 2900
2890 PRINT "INTELLIGENCE TOO LOW FOR ELF.": GOTO 2770
2900 IF CN = 6 AND CO < 9 THEN 2920
2910 GOTO 2960
2920 PRINT "CONSTITUTION TOO LOW FOR DWARF.": GOTO 2770
2930 REM***************************
2940 REM HIT DICE ASSIGNED BY RACE/CLASS
2950 REM***************************
2960 IF CN = 1 THEN HF = 8
2970 IF CN = 2 THEN HF = 4
2980 IF CN = 3 THEN HF = 6
2990 IF CN = 4 THEN HF = 6
3000 IF CN = 5 THEN HF = 6
3010 IF CN = 6 THEN HF = 8
3020 IF CN = 7 THEN HF = 4
3030 IF CN = 0 THEN 1160
3040 PRINT
3050 REM***************************
3060 REM CHARACTER LEVEL ASSIGNED AND
3070 REM HIT POINTS CALCULATED
3080 REM***************************
3090 PRINT "CHARACTER LEVEL RANGE..ONE(1) TO FIVE(5)"
3100 PRINT
3110 INPUT "AT WHICH LEVEL WILL CHARACTER START"; LL
3120 IF LL > 5 THEN PRINT "NUMBER TOO LARGE: RE-ENTER": GOTO 3110
3130 PRINT CHR$(12)
3140 PRINT
3150 PRINT "YOUR CHARACTER HAS "; LL; " HIT DICE"
3160 PRINT
3170 IF CO = 3 THEN PF = (-3 * LL)
3180 IF CO > 3 AND CO < 6 THEN PF = (-2 * LL)
3190 IF CO > 5 AND CO < 9 THEN PF = (-1 * LL)
3200 IF CO > 8 AND CO < 13 THEN PF = 0
3210 IF CO > 12 AND CO < 16 THEN PF = LL
3220 IF CO > 15 AND CO < 18 THEN PF = (2 * LL)
3230 IF CO = 18 THEN PF = (3 * LL)
3240 GOSUB 4330
3250 REM***************************
3260 REM CLERIC SKILLS ASSIGNED BY LEVEL
3270 REM***************************
3280 IF CN = 3 THEN 3300
3290 GOTO 3500
3300 IF CN = 3 THEN 3320
3310 GOTO 3500
3320 CZ$ = "    CLERIC VS. UNDEAD TABLE (1D20)"
3330 CU$ = "SKEL ZOMB GHOU WIGT WRAI MUMM SPEC VAMP"
3340 PRINT CZ$
3350 PRINT
3360 PRINT CU$
3370 Z1$ = "   7   9   11   --   --   --   --   --"
3380 Z2$ = "   T   7    9   11   --   --   --   --"
3390 Z3$ = "   T   T    7    9   11   --   --   --"
3400 Z4$ = "   D   T    T    7    9   11   --   --"
3410 Z5$ = "   D   D    T    T    7    9   11   --"
3420 IF CN = 3 AND LL = 1 THEN PRINT Z1$
3430 IF CN = 3 AND LL = 2 THEN PRINT Z2$
3440 IF CN = 3 AND LL = 3 THEN PRINT Z3$
3450 IF CN = 3 AND LL = 4 THEN PRINT Z4$
3460 IF CN = 3 AND LL = 5 THEN PRINT Z5$
3470 REM***************************
3480 REM THIEF'S SKILLS ASSIGNED BY LEVEL
3490 REM***************************
3500 IF CN = 7 THEN 3520
3510 GOTO 3720
3520 TY$ = "    THIEVE'S ABILITIES"
3530 TA$ = "PICK REMV PICK MOVE CLIM HIDE HEAR"
3540 TB$ = "LOCK TRAP PCKT SILT SURF SHDW NOIS"
3550 PRINT TY$
3560 PRINT TA$
3570 PRINT TB$
3580 K1$ = " 15% 10% 20% 20% 87% 10% 1-2"
3590 K2$ = " 20% 15% 25% 25% 88% 15% 1-2"
3600 K3$ = " 25% 20% 30% 30% 89% 20% 1-3"
3610 K4$ = " 30% 25% 35% 35% 90% 25% 1-3"
3620 K5$ = " 35% 30% 40% 40% 91% 30% 1-3"
3630 IF LL = 1 THEN PRINT K1$
3640 IF LL = 2 THEN PRINT K2$
3650 IF LL = 3 THEN PRINT K3$
3660 IF LL = 4 THEN PRINT K4$
3670 IF LL = 5 THEN PRINT K5$
3680 REM***************************
3690 REM CHARACTER COUNT DISPLAYED AND
3700 REM DECISION TO USE IS MADE.
3710 REM***************************
3720 CC = CC + 1
3730 PRINT
3740 PRINT "    THIS IS CHARACTER #["; CC; "]"
3750 PRINT
3760 INPUT "DO YOU WANT THIS CHARACTER(Y/N)"; D$
3770 IF D$ = "N" THEN 1320
3780 IF D$ = "Y" THEN 3790
3790 CC = 0
3800 REM***************************
3810 REM OTHER CHARACTER DATA IS INPUT
3820 REM***************************
3830 PRINT CHR$(12)
3840 PRINT: PRINT: PRINT
3850 INPUT "WHAT IS CHARACTER'S NAME"; NA$
3860 PRINT
3870 INPUT "WHAT IS CHARACTER'S RACE"; RA$
3880 PRINT
3890 INPUT "WHAT IS CHARACTER'S GENDER"; SE$
3900 PRINT
3910 INPUT "WHAT IS CHARACTER'S CLASS"; CL$
3920 PRINT CHR$(12)
3930 REM***************************
3940 REM CHARACTER'S GOLD CALCULATED
3950 REM***************************
3960 PRINT: PRINT
3970 LET M1 = INT((RND(1) * 6) + 1)
3980 LET M2 = INT((RND(1) * d) + 1)
3990 LET M3 = INT((RND(1) * 6) + 1)
4000 LET MT = M1 + M2 + M3
4010 LET GC = (10 * MT)
4020 REM***************************
4030 REM SEPARATION BY RACE/CLASS FOR
4040 REM FINAL DATA CALCULATIONS.
4050 REM***************************
4060 IF CN = 1 THEN GOSUB 5470
4070 IF CN = 2 THEN GOSUB 6130
4080 IF CN = 3 THEN GOSUB 5580
4090 IF CN = 4 THEN GOSUB 5690
4100 IF CN = 5 THEN GOSUB 5800
4110 IF CN = 6 THEN GOSUB 5910
4128 IF CN = 7 THEN GOSUB 6020
4130 GOSUB 4510
4140 PRINT
4150 REM********************************
4160 REM 'END' OR 'CONTINUE' AND CLOSE
4170 REM***************************
4180 INPUT "ANOTHER CHARACTER (Y/N)"; GB$
4190 IF GB$ = "Y" THEN 1320
4200 PRINT CHR$(12)
4210 PRINT: PRINT: PRINT: PRINT: PRINT
4228 PRINT " THANKS FOR USING ME!"
4230 PRINT
4240 PRINT "IF YOU CHANGE YOUR MIND AND"
4250 PRINT "WANT ANOTHER CHARACTER,JUST"
4260 PRINT "ENTER THE WORD 'RUN' - BYE."
4270 CLEAR
4280 END
4290 PRINT
4300 REM***************************
4310 REM SUBROUTINE TO CALCULATE HIT PTS
4320 REM***************************
4330 Y = Y + 1
4340 PS = INT((RND(1) * HF) + 1)
4350 PS(Y) = PS
4360 IF Y <> LL THEN 4330
4370 FOR Y = 1 TO LL
4380 PS = PS + PS(Y)
4390 NEXT Y
4400 PT = PS + PF
4410 IF PT <= 0 THEN 4430
4420 GOTO 4440
4430 PT = LL
4440 PRINT "YOUR CHARACTER WOULD HAVE"; PT; " HIT POINTS!"
4450 PRINT
4460 Y = 0
4470 RETURN
4480 REM***************************
4490 REM RECAP DISPLAY BEGINS
4500 REM***************************
4510 PRINT CHR$(12)
4520 PRINT
4530 PRINT "    RECAP OF CHARACTER ABILITIES"
4540 PRINT
4550 PRINT "NAME...."; NA$
4560 PRINT "RACE...."; RA$; TAB(22); "HIT DICE: "; LL
4570 PRINT "GENDER.."; SE$
4580 PRINT "CLASS..."; CL$; TAB(22); "HIT POINTS: "; PT
4590 PRINT "LEVEL..."; LL
4600 PRINT
4610 PRINT "N O T E !! COPY THIS AND THE INFORMATION"
4620 PRINT "THAT FOLLOWS TO THE CHARACTER"
4630 PRINT "RECORD SHEET. IT WILL NOT BE"
4640 PRINT "AVAILABLE AGAIN!"
4650 PRINT
4660 INPUT "TO CONTINUE,ENTER A ONE(1)"; KK
4670 ON KK GOTO 4680
4680 PRINT CHR$(12)
4690 PRINT NA$; "'S STRENGTH IS.. . . . ."; ST
4700 IF SF = 0 THEN 4720
4710 PRINT "*ADD"; SF; "TO ROLL TO:'HIT,DAMAGE,OPEN DOORS"
4720 PRINT NA$; "'S CONSTITUTION IS.."; CO
4730 PRINT NA$; "'S INTELLIGENCE IS.."; IN
4740 IF CN = 2 THEN PRINT IZ$
4750 PRINT I$
4760 PRINT NA$; "'S DEXTERITY IS...."; DX
4770 IF DF = 0 THEN 4800
4780 PRINT "*ADD"; DF; "TO MISSILE FIRE ROLLS 'TO HIT'"
4790 PRINT "*"; X1$; X2$; X3$; " ARMOR CLASS."
4800 PRINT NA$; "'S WISDOM IS......."; WI
4810 IF WF = 0 THEN 4830
4820 PRINT "*ADD*"; WF; "TO ROLL-MAGIC BASED SAVING THROWS"
4830 PRINT NA$; "'S CHARISMA IS......"; CH
4840 PRINT "*CHAR MAY HAVE"; XF; "RETAINERS - MORALE OF"; XF
4850 IF CN = 3 THEN 4900
4860 GOTO 4960
4870 REM***************************
4880 REM DISPLAYS CLERIC'S SKILLS
4890 REM***************************
4900 PRINT CZ$: PRINT CU$
4910 IF CN = 3 AND LL = 1 THEN PRINT Z1$
4920 IF CN = 3 AND LL = 2 THEN PRINT Z2$
4930 IF CN = 3 AND LL = 3 THEN PRINT Z3$
4940 IF CN = 3 AND LL = 4 THEN PRINT Z4$
4950 IF CN = 3 AND LL = 5 THEN PRINT Z5$
4960 IF CN = 7 THEN 5010
4970 GOTO 5070
4980 REM***************************
4990 REM DISPLAYS THIEF'S SKILLS
5000 REM***************************
5010 PRINT TY$: PRINT TA$: PRINT TB$
5020 IF CN = 7 AND LL = 1 THEN PRINT K1$
5030 IF CN = 7 AND LL = 2 THEN PRINT K2$
5040 IF CN = 7 AND LL = 3 THEN PRINT K3$
5050 IF CN = 7 AND LL = 4 THEN PRINT K4$
5060 IF CN = 7 AND LL = 5 THEN PRINT K5$
5070 INPUT "TO CONTINUE,ENTER A ONE(1)"; PK
5080 ON PK GOTO 5120
5090 REM***************************
5100 REM DISPLAYS SAVING THROW TABLE
5110 REM***************************
5120 PRINT CHR$(12): PRINT
5130 PRINT "    SAVING THROW TABLE"
5140 PRINT "DEATH :     :PARALYSIS:      :RODS"
5150 PRINT "RAY OR:MAGIC: OR TURN :DRAGON:STAVES"
5160 PRINT "POISON:WANDS:TO STONE :BREATH:OR SPELLS"
5170 PRINT "------:-----:---------:------:---------"
5180 PRINT ST$
5190 PRINT P1$
5200 PRINT P2$
5210 PRINT P3$
5220 PRINT P4$
5230 PRINT P5$
5240 REM***************************
5250 REM DISPLAYS PLAYER'S GOLD SUPPLY
5260 REM***************************
5270 PRINT "THIS CHARACTER HAS["; GC; "] GOLD PIECES."
5280 RETURN
5290 REM***************************
5300 REM DISPLAYS WISDOM ADJUSTMENTS
5310 REM***************************
5320 X1$ = "ADD ": X2$ = "3": X3$ = " TO"
5330 RETURN
5340 X1$ = "ADD ": X2$ = "2": X3$ = " TO"
5350 RETURN
5360 X1$ = "ADD ": X2$ = " 1 ": X3$ = " TO"
5370 RETURN
5380 X1$ = "SUBTRACT ": X2$ = "1": X3$ = " FROM"
5390 RETURN
5400 X1$ = "SUBTRACT ": X2$ = "2": X3$ = " FROM"
5410 RETURN
5420 X1$ = "SUBTRACT ": X2$ = "3": X3$ = " FROM"
5430 RETURN
5440 REM***************************
5450 REM SAVING THROW & MISC.-FIGHTER
5460 REM***************************
5470 IF LL < 4 THEN ST$ = "...12....13......14.......15......16"
5480 IF LL > 3 AND LL < 6 THEN ST$ = "...10....11......12.......13......14"
5490 P1$ = "MAY WEAR ANY ARMOR AND USE SHIELD."
5500 P2$ = "MAY USE ANY WEAPON."
5510 P3$ = " "
5520 P4$ = "NO SPELLS, BUT MAY USE MAGIC ARTICLE."
5530 P5$ = " "
5540 RETURN
5550 REM***************************
5560 REM SAVING THROW & MISC.-CLERIC
5570 REM********************************
5580 IF LL < 5 THEN ST$ = "..11....12......14.......16......15"
5590 IF LL = 5 THEN ST$ = "...9....10......12.......14......12"
5600 P1$ = "MAY NOT USE EDGED WEAPONS."
5610 P2$ = "MAY WEAR ANY ARMOR AND USE SHIELD. "
5620 P3$ = "MAY USE SLING "
5630 P4$ = "HAS ABILITY TO 'TURN' UNDEAD.'"
5640 P5$ = "USES CLERICAL SPELLS ONLY. "
5650 RETURN
5660 REM***************************
5670 REM SAVING THROW & MISC.- HALFLING
5680 REM***************************
5690 IF LL < 4 THEN ST$ = "...8.....9......10.......13......12"
5700 IF LL > 3 AND LL < 6 THEN ST$ = "...6.....7.......8.......10......10"
5710 P1$ = "CANNOT USE LONGBOW OR 2 HANDED SWORD."
5720 P2$ = "ADJUST MISSILE ATTACK 'TO HIT' BY +1."
5730 P3$ = "ADJ AC BY -1 VS. MORE THAN MAN-SIZE OPP."
5740 P4$ = "ONLY 10% CHANCE OF DETECTION IN WOODS."
5750 P5$ = "REMAINS UNSEEN IN DUNGEON ON 1-2 (1D6)"
5760 RETURN
5770 REM***************************
5780 REM SAVING THROW & MISC. - ELF
5790 REM***************************
5800 IF LL < 4 THEN ST$ = "..12....13......13.......15......15"
5810 IF LL > 3 AND LL < 6 THEN ST$ = "..18....11......11.......13......12"
5820 P1$ = "HAS 60' INFRA-VISION."
5830 P2$ = "DETECTS OR SECRET DOORS ON 1-2(1D6)."
5840 P3$ = "IMMUNE TO PARALYSIS FROM GHOUL ATTACK."
5850 P4$ = "SPEAKS ELVISH,ORC,HOB-GOBLIN,AND GNOLL."
5860 P5$ = "MAY USE SPELLS AND MAGIC ARTICLES."
5870 RETURN
5880 REM***************************
5890 REM SAVING THROW & MISC. - DWARF
5900 REM***************************
5910 IF LL < 4 THEN ST$ = "...8.....9......10.......13......12"
5920 IF LL > 3 AND LL < 6 THEN ST$ = "...6.....7.......8.......10......10"
5930 P1$ = "HAS 60' INFRA-VISION."
5940 P2$ = "DET'S TRAPS,DUNGEON ANOMALIES,@ 1-2(1D6)"
5950 P3$ = "SPEAKS DWARVISH,GNOME,KOBOLD,AND GOBLIN."
5960 P4$ = "MAY NOT USE A LONGBOW OR 2-HANDED SWORD."
5970 P5$ = " "
5980 RETURN
5990 REM***************************
6000 REM SAVING THROW & MISC. - THIEF
6010 REM***************************
6020 IF LL < 5 THEN ST$ = "...13....14......13.......16......15"
6030 IF LL = 5 THEN ST$ = "...12....13......11.......14......13"
6040 P1$ = "LEATHER ARMOUR ONLY-NO SHIELD"
6050 P2$ = "BACKSTABBING ADDS +4 TO 'TO HIT' ROLL"
6060 P3$ = "BACKSTABBING DOES TWICE NORMAL DAMAGE"
6070 P4$ = "SEE TABLE FOR OTHER SKILLS."
6080 P5$ = " "
6090 RETURN
6100 REM***************************
6110 REM SAVING THROW & MISC.-MAGIC USER
6120 REM***************************
6130 ST$ = "    13 14 13 16 15"
6140 P1$ = "MAY NOT USE A SHIELD OR WEAR ARMOR."
6150 P2$ = "MAY USE ONLY A DAGGER AS A WEAPON."
6160 P3$ = "CHECK INTELLIGENCE FOR ABILITY TO"
6170 P4$ = "LEARN SPELLS AND # OF SPELLS/LEVEL"
6180 P5$ = " "
6190 RETURN`

const Console = {
    clear: "\x1B[H\x1B[J",
    write(s) { console.log(s); },
    read() {
        const buffer = prompt("Input text");
        return buffer.toString('utf8', 0, length - 1);
    },
    exit(n) { return; }
};

class Basic {
    constructor(source) {
        this.tokens = [];
        this.lines = {};
        this.index = 0;
        this.variables = {};
        this.stack = [];
        this.tokenize(source);
    }

    tokenize(source) {
        source.replace(/\n\d+|\d+(\.\d*)?|\.\d+|REM.*$|\w+\$?|[-+*/():;,=]|<[=>]?|>=?|"[^"]*"/gm, m => {
            if (/^\n/.test(m)) {
                if (this.tokens.length) { this.tokens.push(":"); }
                this.lines[m.slice(1)] = this.tokens.length;
            } else {
                this.tokens.push(/^REM/.test(m) ? "REM" : m);
            }
        });
    }

    next() { return this.tokens[this.index++]; }

    back() { --this.index; return this; }

    at(token) {
        if (this.next() === token) { return true; }
        this.back();
    }

    atEnd() { return this.at(":"); }

    expect(token) {
        this.at(token) || this.error(`expected ${token} but found ${this.next()}`);
    }

    expectEnd() { this.expect(":"); }

    error(message) {
        throw new Error(message);
    }

    skip() {
        let index = Number.MAX_VALUE;
        Object.keys(this.lines).forEach(line => {
            const i = this.lines[line];
            if (i >= this.index) {
                index = Math.min(i, index);

            }
        }, this);
        this.index = index;
    }

    run() {
        while (true) { (this[this.name()] || this["assign"]).call(this); }
    }

    assign() {
        let name = this.back().name();
        let index = this.at("(") ? this.back().evaluate() : null;
        this.expect("=");
        let value = this.evaluate();
        if (index !== null) {
            this.variables[name + "()"][index] = value;
        } else {
            this.variables[name] = value;
        }
        this.expectEnd();
    }

    REM() {
        this.expectEnd();
    }

    LET() {
        this.next();
        this.assign();
    }

    DIM() {
        let name = this.name();
        let dim = this.evaluate()
        this.variables[name + "()"] = Array(dim + 1);
        this.expectEnd();
    }

    RANDOMIZE() {
        this.expectEnd();
    }

    PRINT() {
        function fmt(o) { return typeof o === "string" ? o : " " + o; }

        if (!this.atEnd()) {
            Console.write(fmt(this.evaluate()));
            while (this.at(";")) {
                if (this.atEnd()) { return; }
                Console.write(fmt(this.evaluate()));
            }
            this.expectEnd();
        }
        Console.write("\n");
    }

    INPUT() {
        let token = this.next();
        if (/^"/.test(token)) {
            Console.write(token.substring(1, token.length - 1));
            this.expect(";");
            token = this.next();
        }
        Console.write("? ");
        let s = Console.read();
        this.variables[token] = /\$$/.test(token) ? s : +s;
        this.expectEnd();
    }

    ON() {
        let value = this.evaluate();
        this.expect("GOTO");
        let lines = [this.next()];
        while (this.at(",")) {
            lines.push(this.next());
        }
        this.expectEnd();
        if (value >= 1 && value <= lines.length) {
            this.index = this.lines[lines[value - 1]];
        }
    }

    IF() {
        let value = this.condition();
        this.expect("THEN");
        let line = this.next();
        if (!/^\d/.test(line)) {
            this.back();
            if (!value) { this.skip(); }
            return;
        }
        this.expectEnd();
        if (value) { this.index = this.lines[line]; }
    }

    GOTO() {
        this.index = this.lines[this.next()];
    }

    GOSUB() {
        let index = this.lines[this.next()];
        this.expectEnd();
        this.stack.push(this.index);
        this.index = index;
    }

    RETURN() {
        this.index = this.stack.pop();
    }

    FOR() {
        let name = this.name();
        this.expect("=");
        let start = this.evaluate();
        this.expect("TO");
        let stop = this.evaluate();
        let step = this.at("STEP") ? this.evaluate() : start <= stop ? 1 : -1;
        this.expectEnd();
        this.variables[name] = start;
        this.stack.push({ name, stop, step, index: this.index });
    }

    NEXT() {
        if (!this.atEnd()) {
            this.name();
            this.expectEnd();
        }
        let a = this.stack.pop();
        this.variables[a.name] += a.step;
        if ((a.step > 0 && this.variables[a.name] <= a.stop)
            || (a.step < 0 && this.variables[a.name] >= a.stop)) {
            this.index = a.index;
            this.stack.push(a);
        }
    }

    CLEAR() {
        this.expectEnd();
        Console.write(Console.clear);
    }

    END() {
        this.expectEnd();
        Console.exit(0);
    }

    name() {
        const token = this.next();
        if (/^[a-zA-Z]/.test(token)) { return token; }
        throw new Error("expected name, but found " + token);
    }

    condition() {
        let left = this.condTerm() ? 1 : 0;
        while (true) {
            if (this.at("AND")) { left &= this.condTerm() ? 1 : 0; }
            else if (this.at("OR")) { left |= this.condTerm() ? 1 : 0; }
            else { return left; }
        }
    }

    condTerm() {
        const left = this.evaluate();
        if (this.at("=")) { return left === this.evaluate(); }
        if (this.at("<")) { return left < this.evaluate(); }
        if (this.at(">")) { return left > this.evaluate(); }
        if (this.at("<=")) { return left <= this.evaluate(); }
        if (this.at(">=")) { return left >= this.evaluate(); }
        if (this.at("<>")) { return left != this.evaluate(); }
        throw new Error("invalid condition");
    }

    evaluate() {
        let left = this.evalTerm();
        while (true) {
            if (this.at("+")) { left += this.evalTerm(); }
            else if (this.at("-")) { left -= this.evalTerm(); }
            else { return left; }
        }
    }

    evalTerm() {
        let left = this.evalFactor();
        while (true) {
            if (this.at("*")) { left *= this.evalFactor(); }
            else if (this.at("/")) { left /= this.evalFactor(); }
            else { return left; }
        }
    }

    evalFactor() {
        if (this.at("-")) { return -this.evalFactor(); }
        if (this.at("(")) {
            const value = this.evaluate();
            this.expect(")");
            return value;
        }
        const token = this.next();
        if (/^"/.test(token)) { return token.substring(1, token.length - 1); }
        if (/^\d|^\./.test(token)) { return +token; }
        if (/^[a-zA-Z]/.test(token)) {
            if (token === "CHR$") {
                const value = this.evalFactor();
                return value === 12 ? Console.clear : String.fromCharCode(value);
            }
            if (token === "INT") {
                return Math.floor(this.evalFactor());
            }
            if (token === "RND") {
                this.evalFactor();
                return Math.random();
            }
            if (token === "TAB") {
                this.evalFactor();
                return "\t";
            }
            if (this.at("(")) {
                const index = this.back().evaluate();
                return this.variables[token + "()"][index] || 0;
            }
            return this.variables[token] || 0;
        }
        throw new Error("cannot evaluate " + token);
    }
}

new Basic(source).run();