﻿using System;
using System.Collections.Generic;
using System.Text;

using NathanWiles.Nala.Errors;
using NathanWiles.Nala.Lexing;

namespace NathanWiles.Nala.Parsing.Rules
{
    public class ClearParseRule : ParseRule
    {
        public override bool Matches(List<NalaToken> sentence)
        {
            return IsProper(sentence);
        }

        public override bool IsProper(List<NalaToken> sentence)
        {
            if (sentence[0].value != "clear")
            {
                new ParseError(this, sentence[0], "Clear calls must begin with the \"clear\" keyword.").Report();
                return false;
            }

            if (sentence[1].value != ";")
            {
                new ParseError(this, sentence[sentence.Count - 1], "Clear calls must end with a ';' character.").Report();
                return false;
            }

            return true;
        }
    }
}
